var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var fs = require("fs");
var path = require("path");
var url = require("url");
var defaultFile = "index.html"
var folder = path.resolve(__dirname, "./");

gulp.task('serve', () => {

  browserSync.init({
    port: 3474,
    server: {
      baseDir: "./",
      middleware: (req, res, next) => {
        var fileName = url.parse(req.url);
        fileName = fileName.href.split(fileName.search).join("");
        var fileExists = fs.existsSync(folder + fileName);
        if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
          req.url = "/" + defaultFile;
        }
        return next();
      }
    }
  });

  gulp.watch('./*.html').on('change', reload);
  gulp.watch('./templates/*.html').on('change', reload);
  gulp.watch('./js/module/*.js').on('change', reload);
  gulp.watch('./js/controllers/*.js').on('change', reload);
  gulp.watch('./js/directives/*.js').on('change', reload);
  gulp.watch('./js/routes/*.js').on('change', reload);
  gulp.watch('./js/services/*.js').on('change', reload);

})

gulp.task('sass', () => {

  gulp.src('./style/sass/style.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  })).on('error', sass.logError)
  .pipe(gulp.dest('./style/css'))
  .pipe(reload({stream: true}));

});

gulp.task('watch', () => {
  gulp.watch('./style/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['serve', 'sass', 'watch']);
