const gulp = require('gulp');
const cleanCSS = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');


gulp.task('minify-html', function() {
    return gulp.src('./*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('minify-css', () => {
    return gulp.src('./*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./'));
  });


  gulp.task('compress', function() {
    gulp.src(['./*.js'])
      .pipe(minify())
      .pipe(gulp.dest('./'))
  });






  gulp.task('default', gulp.series(['minify-css' ,'minify-html' ,'compress']));