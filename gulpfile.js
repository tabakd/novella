var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var serve = require('gulp-serve');
var livereload = require('gulp-livereload');

var src_dir = {
	client: 'client', 
	server: 'server'
}

gulp.task('js', function () {
	browserify({ entries: src_dir.client + '/js/app.js'})
		.transform(babelify)
		.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(livereload());;
});

gulp.task('html', function () {
	return gulp.src(src_dir.client + '/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', serve('dist'));

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('/js/**/*.js', ['js']);
});

gulp.task('default', ['js', 'html', 'serve', 'watch']);
