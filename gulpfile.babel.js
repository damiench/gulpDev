import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import concat from 'gulp-concat';
import browserify from 'browserify';
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
const dirs = {
	src: './src',
	build: './build'
};
const dependencies = [
	'react',
  	'react-dom'
];

var scriptsCount = 0;

const sassPaths = {
	src: `${dirs.src}/client/style/**/*.scss`, 
	dest: `${dirs.build}/client/style`
};

gulp.task('styles', () => {
	return gulp.src(sassPaths.src)
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', () => { console.log('error on sass sync')}))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(sassPaths.dest))
});

gulp.task('scripts', () => {
    bundleApp(false);
});
 
gulp.task('deploy', () => {
	bundleApp(true);
});
 
gulp.task('watch', () => {
	gulp.watch(['./src/client/**/*.js'], ['scripts', 'copyHTML']);
});


// gulp.task('compile-client', () => {
// 	return gulp.src('src/client/**/*.js')
// 		.pipe(sourcemaps.init())
// 		.pipe(babel({
// 			presets: ['es2015', 'react']
// 		}))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest(`${dirs.build}/client`))
// });

// gulp.task('compile-server', () => {
// 	return gulp.src('src/server/**/*.js')
// 		.pipe(babel({
// 			presets: ['es2015']
// 		}))
// 		.pipe(gulp.dest(`${dirs.build}/server`))
// })

gulp.task('copyHTML', () => {
	gulp.src(`${dirs.src}/client/index.html`)
		.pipe(gulp.dest(`${dirs.build}/client/`));
});

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
			.pipe(gulp.dest(`${dirs.build}/client/lib`));
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
	    .pipe(gulp.dest(`${dirs.build}/client/`));

}