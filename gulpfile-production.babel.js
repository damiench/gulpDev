import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import babelify from 'babelify';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import minify from 'gulp-minify-css';
import merge from 'merge-stream';
import uglify from 'gulp-uglify';
import buffer from 'gulp-buffer';

const dirs = {
	src: './src',
	dest: './build',
	serverDest: './build/server',
	clientDest: './build/client' 
};

const sassPaths = {
	src: `${dirs.src}/client/style/`, 
	dest: `${dirs.clientDest}/style`
};

gulp.task('styles', () => {
	let sassStream = gulp.src(sassPaths.src + '**/*.scss')
		.pipe(autoprefixer())
		.pipe(sass())
		.pipe(minify())
		.pipe(concat('scss-files.scss'))

	let cssStream = gulp.src(sassPaths.src + '**/*.css')
		.pipe(concat('css-files.css'))

	return merge(sassStream, cssStream)
		.pipe(concat('styles.css'))
		.pipe(minify())
		.pipe(gulp.dest(sassPaths.dest))
});

gulp.task('scripts', () => {
    return browserify({
    		entries: `${dirs.src}/client/index.jsx`, 
    		extensions: ['.jsx', '.js'], 
    		debug: false
    	})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', (err) => {
            console.error(err.toString());
            
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())     
        .pipe(gulp.dest(`${dirs.clientDest}`))
});

gulp.task('compile-server', () => {
	return gulp.src('src/server/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}).on('error', (err) => { console.error(err); }))
		.pipe(gulp.dest(`${dirs.serverDest}`))
});

gulp.task('copyHTML', () => {
 	gulp.src(`${dirs.src}/client/index.html`)
 		.pipe(gulp.dest(`${dirs.clientDest}/`));
});

gulp.task('default', ['styles', 'scripts', 'compile-server', 'copyHTML'])