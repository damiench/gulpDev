import gulp from 'gulp';
import sass from 'gulp-sass';
import ifElse from 'gulp-if-else';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import nodemon from 'gulp-nodemon';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import minify from 'gulp-minify-css';
import react from 'gulp-react';
import merge from 'merge-stream';

//main directories to use
const dirs = {
	src: './src',
	dest: './build',
	serverDest: './build/server',
	clientDest: './build/client' 
};

// styles tasks 

const sassPaths = {
	src: `${dirs.src}/client/style/`, 
	dest: `${dirs.clientDest}/style`
};

gulp.task('styles', () => {
	let sassStream = gulp.src(sassPaths.src + '**/*.scss')
		.pipe(sass())
		.pipe(concat('scss-files.scss'))

	let cssStream = gulp.src(sassPaths.src + '**/*.css')
		.pipe(concat('css-files.css'))

	return merge(sassStream, cssStream)
		.pipe(ifElse(process.env.NODE_ENV === 'development', sourcemaps.init))
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(minify())
		.pipe(ifElse(process.env.NODE_ENV === 'development',sourcemaps.write))
		.pipe(gulp.dest(sassPaths.dest))
});
// end style tasks


// frontend scripts tasks
gulp.task('scripts', () => {
    return browserify({entries: `${dirs.src}/client/index.jsx`, extensions: ['.jsx'], debug: true })
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', function (err) {
            console.error(err.toString());
            this.emit("end");
        })
        .pipe(source('bundle.js'))  
        .pipe(gulp.dest(`${dirs.clientDest}`));
});

//end scripts tasks
 
 
 //watch for dev environment
gulp.task('watch', ['scripts', 'styles', 'compile-server'], () => {
	gulp.watch(['./src/client/**/*.+(js|jsx)'], ['scripts']);
	gulp.watch(['./src/client/**/*.+(css|scss)'], ['styles']);
	gulp.watch(['./src/server/**/*.js'], ['compile-server']);
});

//endwatch


//task for server build to es5
gulp.task('compile-server', () => {
	return gulp.src('src/server/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}).on('error', function() { console.error('error'); }))
		.pipe(gulp.dest(`${dirs.serverDest}`))
});

//end task server build

// develop task 
gulp.task('develop', ['watch'], function() {
	var stream = nodemon({
		script: `${dirs.serverDest}/index.js`,
		ext: 'js',
		ignore: ['node_modules/'],
		watch: dirs.serverDest
	})
	stream
		.on('restart', function() {
			console.log('nodemon restarting')
		})
		.on('crash', function() {
			console.error('application has crashed!\n');
			stream.emit('restart', 5);
		})
});
// end dev task

//html pipe into build dir
gulp.task('copyHTML', () => {
 	gulp.src(`${dirs.src}/client/index.html`)
 		.pipe(gulp.dest(`${dirs.clientDest}/`));
});
//end html


// type 'gulp' to run project
gulp.task('default', ['develop', 'copyHTML']);


