var gulp = require('gulp')
var connect = require('gulp-connect')
var log = require('gulp-util').log
var path = require('path')

gulp.task('serve', function () {
  connect.server({
    livereload: true
  })
})

gulp.task('watch', function () {
  gulp.watch(['index.html', 'main.css'], function (event) {
    log('Reloading', path.basename(event.path))
    gulp.src(event.path).pipe(connect.reload())
  })
})

gulp.task('default', ['serve', 'watch'])
