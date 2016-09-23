var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');

gulp.task('serve', serve('./'));

gulp.task('sass', () => {

  gulp.src('./style/sass/style.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  })).on('error', sass.logError)
  .pipe(gulp.dest('./style/css'))

})

gulp.task('watch', () => {
  gulp.watch('./style/sass/**/*.scss', ['sass'])
})

gulp.task('default', ['serve', 'sass', 'watch'])
