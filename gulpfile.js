var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('webpack-stream');

var paths = {
  scripts: [__dirname + '/lib/*.js', __dirname + '/../routers/*.js', __dirname + '/../server/*.js', __dirname + '/index.js'],
  tests: [__dirname + '/test/server-test.js'],
  client: ['app/**/*.js']
};

gulp.task('lint', () => {
  return gulp.src(paths.tests)
    .pipe(eslint({
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lintClient', () => {
  return gulp.src(paths.client)
    .pipe(eslint('./app/.eslintrc'))
    .pipe(eslint.format());
});

gulp.task('webpack', () => {
  return gulp.src('./app/js/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }));
});

gulp.task('static', () => {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
  gulp.src('app/**/*.css')
    .pipe(gulp.dest('./build'));
});


gulp.task('default', ['lintClient', 'webpack', 'static']);
gulp.task('build', ['webpack', 'static']);

gulp.task('default', ['lint']);
