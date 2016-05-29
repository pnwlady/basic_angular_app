var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var map = require('gulp-sourcemaps');
var webpack = require('webpack-stream');
// var protractor = require('gulp-protractor').protractor;

var path = {
  scripts: ['client_server.js', 'index.js', 'router/**/*.js',
'models/**/*.js', 'gulpfile.js'],
  tests: [__dirname + '/test/server-test.js'],
  client: ['app/js/entry.js']
};

// gulp.src(['./src/tests/*.js'])
//   .pipe(protractor({
//     configFile: 'test/protractor.config.js',
//     args: ['--baseUrl', 'http://127.0.0.1:8000']
//   }))
//   .on('error', (e) => { throw e });

gulp.task('lintServer', () => {
  return gulp.src(path.scripts)
    .pipe(eslint({
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lintClient', () => {
  return gulp.src(path.client)
    .pipe(eslint('./app/.eslintrc'))
    .pipe(eslint.format());
});

gulp.task('entry', () => {
  return gulp.src('app/js/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:dev', () => {
  return gulp.src('app/css/style.scss')
    .pipe(map.init())
    .pipe(sass())
    .pipe(map.write('./'))
    .pipe(gulp.dest('./build'));
});

gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./*.scss', ['sass:dev']);
});

gulp.task('lint', ['lintServer', 'lintClient']);
gulp.task('build', ['entry', 'html']);
gulp.task('default', ['build', 'lint', 'sass:dev']);
