const gulp = require('gulp');
const webpack = require('webpack-stream');
const eslint = require('eslint');

var browerFiles = ['/server.js'];
var appFiles = ['app/js/*.js', 'app/css/.css', 'app/index.html'];

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

gulp.task('css:dev', () => {
  gulp.src('app/css/*.css')
    .pipe(gulp.dest('./build'));
});

gulp.task('lint:BE', () => {
  return gulp.src(browerFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint:FE', () => {
  return gulp.src(appFiles)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('protractor', ['lint:BE', 'lint:FE']);
gulp.task('protractor', ['']);

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'css:dev']);
gulp.task('default', ['webpack:dev', 'static:dev', 'css:dev']);
