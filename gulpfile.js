var gulp = require('gulp'),
  sass = require('gulp-sass')(require('node-sass')),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  package = require('./package.json'),
  notify = require('gulp-notify'),
  touch = require('gulp-touch-cmd'),
  replace = require('gulp-replace'),
  livereload = require('gulp-livereload')

var config = {
  bootstrapDir: './src/bootstrap',
  publicDir: '.',
  srcDir: './src',
}

var banner = [
  '/*!\n' +
    ' * <%= package.name %>\n' +
    ' * <%= package.url %>\n' +
    ' * @author <%= package.author %>\n' +
    ' * @version <%= package.version %>\n' +
    ' * Copyright ' +
    new Date().getFullYear() +
    '. <%= package.license %> licensed.\n' +
    ' */',
  '\n',
].join('')

gulp.task('css', function () {
  return gulp
    .src(config.srcDir + '/scss/style.scss')
    .pipe(
      sass({
        includePaths: [config.bootstrapDir + '/scss'],
      }).on('error', sass.logError),
    )
    .pipe(gulp.dest(config.publicDir + '/css'))
    .pipe(header(banner, {package: package}))
    .pipe(gulp.dest(config.publicDir + '/css'))
    .pipe(
      notify({
        message: 'CSS Re-Generated',
      }),
    )
    .pipe(touch())
})

gulp.task('cssmin', function () {
  return gulp
    .src(config.publicDir + '/css/style.css')
    .pipe(cssnano())
    .pipe(
      rename({
        suffix: '.min',
      }),
    )
    .pipe(header(banner, {package: package}))
    .pipe(gulp.dest(config.publicDir + '/css'))
    .pipe(livereload())
    .pipe(
      notify({
        message: 'CSS Minimized',
      }),
    )
    .pipe(touch())
})

gulp.task('cache-bust-css', function () {
  var cbString = new Date().getTime()
  return gulp
    .src(['index.html'])
    .pipe(
      replace(/cache_bust=\d+/g, function () {
        return 'cache_bust=' + cbString
      }),
    )
    .pipe(gulp.dest('.'))
})

gulp.task('init', gulp.series('css'), function () {})

gulp.task('watch', function () {
  livereload.listen()
  gulp.watch(
    'src/scss/**/*.scss',
    gulp.series('css', 'cssmin', 'cache-bust-css'),
  )
})

gulp.task('default', gulp.series('css', 'cssmin', 'cache-bust-css', 'watch'))
