var gulp = require('gulp');
var browserSync = require("browser-sync");
var sass = require('gulp-sass');

function transpileSass() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    )
}

function reload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  gulp.watch("app/sass/**/*.scss", transpileSass);
  gulp.watch("app/**/*.html", reload);
}

exports.serve = gulp.series(transpileSass, watchFiles);