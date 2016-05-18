const gulp = require('gulp');
const gulpPro = require('gulp-protractor');
const webpack = require('webpack-stream');
const cp = require('child_process');
const eslint = require('eslint');

var browerFiles = ['/server.js'];
var appFiles = ['app/js/*.js', 'app/css/.css', 'app/index.html'];
var children = [];

gulp.task('webpack:dev', () => {
  gulp.src('./app/js/entry.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('./build'))
    .on('end', () => {
      children.forEach((child) => {
        child.kill('SIGTERM');
      });
    });
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

gulp.task('startservers:test', () => {
  // client side server
  children.push(cp.fork('server.js'));
  children.push(cp.spawn('webdriver-manager', ['start']));
  children.push(cp.spawn('mongod', ['--dbpath=./db']));
  // back end server
  children.push(cp.span('_server.js', [], { env: { MONGO_URI: 'mongod:localhost/test-server/' } }));
});

gulp.task('protractor:test', ['startservers:test', 'build:dev'], () => {
  gulp.src('/test/*spec.js')
    .pipe(gulpPro({
      configFile: 'test/config.js'
    }));
});

gulp.task('protractor', ['lint:BE', 'lint:FE']);
gulp.task('protractor', ['']);

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'css:dev']);
gulp.task('default', ['webpack:dev', 'static:dev', 'css:dev']);
