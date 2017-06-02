import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import babelify from 'babelify';
import nodemon from 'gulp-nodemon';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import merge from 'merge-stream';
import changed from 'gulp-changed';
let browserSync =  require('browser-sync').create();

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
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(sass())
		.pipe(sourcemaps.write())
		.pipe(concat('scss-files.scss'))

	let cssStream = gulp.src(sassPaths.src + '**/*.css')
		.pipe(concat('css-files.css'))

	return merge(sassStream, cssStream)
		.pipe(concat('styles.css'))
		.pipe(gulp.dest(sassPaths.dest))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', () => {
    return browserify({
    		entries: `${dirs.src}/client/index.jsx`, 
    		extensions: ['.jsx', '.js'], 
    		debug: true
    	})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .on('error', (err) => {
            console.error(err.toString());
            
        })
        .pipe(source('bundle.js'))  
        .pipe(gulp.dest(`${dirs.clientDest}`))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['scripts', 'styles', 'compile-server'], () => {
	gulp.watch(['./src/client/**/*.+(js|jsx)'], ['scripts']);
	gulp.watch(['./src/client/**/*.+(css|scss)'], ['styles']);
	gulp.watch(['./src/server/**/*.js'], ['compile-server']);
});

gulp.task('compile-server', () => {
	return gulp.src('src/server/**/*.js')
		.pipe(changed(`${dirs.serverDest}`))
		.pipe(babel({
			presets: ['es2015']
		}).on('error', (err) => { console.error(err); }))
		.pipe(gulp.dest(`${dirs.serverDest}`))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('develop', ['watch'], () => {
	var stream = nodemon({
		script: `${dirs.serverDest}/index.js`,
		ext: 'js',
		ignore: ['node_modules/'],
		watch: dirs.serverDest
	})
	stream
		.on('restart', () => {
			console.log('nodemon restarting')
		})
		.on('crash', () => {
			console.error('application has crashed!\n');
			stream.emit('restart', 5);
		})
});

gulp.task('copyHTML', () => {
 	gulp.src(`${dirs.src}/client/index.html`)
 		.pipe(gulp.dest(`${dirs.clientDest}/`));
});

gulp.task('browserSync', () => {
	browserSync.init({
		proxy: 'http://localhost:3000/',
		port: 3001
	});
});

gulp.task('default', ['browserSync', 'develop', 'copyHTML']);