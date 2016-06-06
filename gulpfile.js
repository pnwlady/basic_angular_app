const gulp = require('gulp');
const webpack = require('webpack-stream');
const nodemon = require('gulp-nodemon');
const cp = require('child_process');
const exec = require('child_process').exec;
const protractor = require('gulp-protractor').protractor;
const mongoUri = 'mongodb://localhost/4020';
var children = [];

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

gulp.task('startservers:test', ['webpack:dev', 'static:dev', 'css:dev'], () => {
  children.push(cp.fork('server.js'));
  children.push(cp.spawn('webdriver-manager', ['start']));
  children.push(cp.spawn('mongod', ['--dbpath=./db']));
  children.push(cp.fork('../', [], {env: {MONGO_URI: mongoUri}}));
});

// gulp.task('startServers:develop', ['webpack:dev', 'static:dev', 'css:dev'], () => {
//   nodemon({
//     script: 'server.js',
//     ext: 'html js css',
//     ignore: ['build'],
//     tasks: ['protractor']
//   });
// });

// gulp.task('startServers:selenium', () => {
//   exec('webdriver-manager start', (cb) => {
//     cb(err);
//   });
// });

gulp.task('protractor', ['startservers:test'], () => {
  gulp.src(['./test/*spec.js'])
    .pipe(protractor({
        configFile: 'test/config.js',
        args: ['--baseUrl', 'http:127.0.0.1:5000']
      }))
    .on('end', () => {
      children.forEach((child) => {
        child.kill('SIGTERM');
      });
    });
});

gulp.task('default', ['protractor']);
