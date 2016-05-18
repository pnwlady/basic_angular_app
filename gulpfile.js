var gulp = require('gulp');
var eslint = require('gulp-eslint');
var webpack = require('webpack-stream');

var paths = {
  scripts: [__dirname + '/router/*.js', __dirname + 'server.js', __dirname + 'index.js'],
  // tests: [__dirname + '/test/server-test.js'],
  client: ['app/js/*.js', 'app/index.html']
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
  gulp.src(paths.client)
    .pipe(eslint('./app/.eslintrc'))
    .pipe(eslint.format());
});

gulp.task('webpack', () => {
  gulp.src('./app/js/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }));
});

gulp.task('static', () => {
  gulp.src('app/**/*.html')
    .pipe(gulp.dest('/../build'));
  gulp.src('app/**/*.css')
    .pipe(gulp.dest('/../build'));
});


gulp.task('default', ['lintClient', 'webpack', 'static']);
gulp.task('build', ['webpack', 'static']);

gulp.task('default', ['lint']);
