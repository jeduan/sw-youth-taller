var gulp = require('gulp')
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer-core')
var connect = require('gulp-connect')

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
    .pipe(connect.reload())
})

gulp.task('serve', function () {
  connect.server({
    livereload: true
  })
})

gulp.task('reload', function () {
  connect.reload()
})

gulp.task('watch', ['css'], function () {
  gulp.watch('src/*.css', ['css'])
  gulp.watch('index.html', ['reload'])
})

gulp.task('build', ['css'])

gulp.task('default', ['serve', 'watch'])
