const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('scss', function () {
  return gulp.src('./scss//*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./scss//*.scss', gulp.series('scss'));
});

gulp.task('default', gulp.series('scss', 'watch'));