import gulp from 'gulp';
import shell from 'gulp-shell';
import rimraf from 'rimraf';
import run from 'run-sequence';
import server from 'gulp-live-server';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';

const paths = {
  serverJS    : ['./src/**/*.js'],
  serverDest  : './src',
  clientJS    : ['./src/**/*.js'],
  clientDest  : './build'
};

let express;

gulp.task('default', cb => {
  run('server', 'build', cb);
});

gulp.task('build', cb => {
  run('clean-client', 'webpack', 'restart', cb);
});

gulp.task('clean-client', cb => {
  rimraf(paths.clientDest, cb);
});

gulp.task('babel', shell.task([
  'babel src --out-dir app'
]));

gulp.task('webpack', () => {
  return gulp.src('./public/js/index.jsx')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build'));
});

gulp.task('server', () => {
  express = server.new(paths.serverDest);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});