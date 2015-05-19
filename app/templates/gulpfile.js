var gulp = require('gulp')
var jshint = require('gulp-jshint')
var shell = require('gulp-shell')
var clean = require('gulp-clean')
var globs = [
  'app/**/*.js', 'gulpfile.js', 'matfile.js'
]

gulp.task('jshint', function() {
  return gulp.src(globs)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
})

gulp.task('watch', function() {
  gulp.watch(globs, ['jshint'])
})

gulp.task('mat', shell.task(['mat']))

gulp.task('clean', function() {
  return gulp.src('dist/').pipe(clean())
})

gulp.task('copy', ['clean'], function() {
  gulp.src('bower_components/**/*').pipe(gulp.dest('dist/bower_components/'))
  return gulp.src('app/**/*').pipe(gulp.dest('dist/'))
})

gulp.task('move', ['copy'], function() {
  gulp.src('dist/layouts/**/*.html').pipe(gulp.dest('dist/'))
  gulp.src('dist/layouts/**/*.html').pipe(clean())
})


gulp.task('default', ['jshint', 'mat', 'watch'])
gulp.task('build', ['jshint', 'move'])
