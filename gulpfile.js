var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var less = require('gulp-less');

var src_dir = {
	client: 'client', 
	server: 'server'
}

gulp.task('js', function () {
	browserify({ entries: src_dir.client + '/js/app.js'})
		.transform(babelify)
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('less', function () {
	return gulp.src(src_dir.client + '/less/main.less')
		.pipe(less())
		.pipe(gulp.dest('dist/less'));
});

gulp.task('html', function () {
	return gulp.src(src_dir.client + '/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['js', 'less', 'html']);