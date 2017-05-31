import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';
import minify from 'gulp-minify-css';
import merge from 'merge-stream';
const dirs = {
	src: './src',
	dest: './build',
	serverDest: './build/server',
	clientDest: './build/client' 
};
const dependencies = [
	'react',
  	'react-dom'
];

var scriptsCount = 0;

// styles tasks 

const sassPaths = {
	src: `${dirs.src}/client/style/`, 
	dest: `${dirs.clientDest}/style`
};


// |styles done| TODO: attach them in one task 

gulp.task('styles', () => {
	let sassStream = gulp.src(sassPaths.src + '**/*.scss')
		.pipe(sass())
		.pipe(concat('scss-files.scss'))

	let cssStream = gulp.src(sassPaths.src + '**/*.css')
		.pipe(concat('css-files.css'))

	return merge(sassStream, cssStream)
		.pipe(concat('styles.css'))
		.pipe(minify())
		.pipe(gulp.dest(sassPaths.dest))
});


// end style tasks

gulp.task('scripts', () => {
    bundleApp(false);
});
 
gulp.task('deploy', () => {
	bundleApp(true);
});
 
gulp.task('watch', () => {
	gulp.watch(['./src/client/**/*.js'], ['scripts', 'copyHTML']);
});

gulp.task('compile-server', () => {
	return gulp.src('src/server/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(`${dirs.serverDest}`))
})


gulp.task('default', ['scripts','watch', 'copyHTML']);

function bundleApp(isProduction) {
	scriptsCount++;

	const appBundler = browserify({
    	entries: './src/client/index.jsx',
    	debug: true
  	});

	if (!isProduction && scriptsCount === 1) {
  		browserify({
			require: dependencies,
			debug: true
		})
			.bundle()
			.on('error', gutil.log)
			.pipe(source('vendors.js'))
			.pipe(gulp.dest(`${dirs.clientDest}/lib`));
  	}

  	if (!isProduction) {
  		dependencies.forEach(function(dep){
  			appBundler.external(dep);
  		})
  	}
 
  	appBundler
	  	.transform("babelify", { presets: ["es2015", "react"] })
	    .bundle()
	    .on('error',gutil.log)
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest(`${dirs.clientDest}`));

}