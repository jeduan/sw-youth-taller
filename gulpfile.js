var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer-core')
var livereload = require('gulp-livereload')

gulp.task('css', function () {
  return gulp.src('src/*.css')
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'last 2 iOS versions',
          'last 4 Android versions'
        ]
      })
    ]))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload())
})

gulp.task('watch', function () {
  livereload.listen()
  gulp.watch('src/*.css', ['css'])
})
