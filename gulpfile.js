const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('webpack:dev', () => {
  gulp.src('./app/js/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('static:dev', () => {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['webpack:dev', 'static:dev']);
gulp.task('build:dev', ['webpack:dev', 'static:dev']);
