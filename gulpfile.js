var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
const minify = require('gulp-minify');

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('dist/styles'));
});

var jsFiles = 'js/*.js',
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {
  gulp.src('css/*.css')
  .pipe(minify({
      ext:{
          src:'-min.css',
          min:'.css'
      },
  }))
  .pipe(gulp.dest('dist/styles'))
});