//gulp properties destructuring
const { src, dest, series, parallel, watch } = require('gulp');

//#region gulp plugin caching to use
const concat = require('gulp-concat'),
  prefix = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  minifyCss = require('gulp-clean-css'),
  babel = require('gulp-babel'),
  minifyEs5 = require('gulp-uglify'),
  beeper = require('beeper'),
  notifier = require('node-notifier');
//#endregion

//#region sassCompile Task
function sassCompile(cb) {
  src(['content/sass/main.scss'])
    .pipe(sourcemaps.init())
    // .pipe(sass({outputStyle: "nested"}).on('error',sass.logError))
    .pipe(
      sass({ outputStyle: 'nested' }).on('error', function (err) {
        console.log(
          `-----------------------------------------------------------------`
        );
        console.log(err.message);
        console.log(
          `-----------------------------------------------------------------`
        );
        beeper();

        notifier.notify(
          {
            title: 'Sass Error Compiling',
            message: `Error in File : ${err.relativePath} \nError in Line : ${err.line} , Column : ${err.column} `,
            sound: false,
            wait: false,
            timeout: 1,
          },
          function (err, response) {
            // Response is response from notification
          }
        );
        this.emit('end');
      })
    )
    .pipe(prefix('last 2 versions'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('content/css'));
  cb();
}
//#endregion

//#region minifyLtrCss Task
function minifyLtrCss(cb) {
  src([
    'content/css/vendor/font-styles/font_awesome_styles.css',
    'content/css/main.css',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main-ltr.min.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('content/css'));
  cb();
}
//#endregion

//#region minifyRtlCss Task
function minifyRtlCss(cb) {
  src([
    'content/css/vendor/font-styles/font_awesome_styles.css',
    'content/css/main-rtl.css',
  ])
    .pipe(sourcemaps.init())
    .pipe(concat('main-rtl.min.css'))
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('content/css'));
  cb();
}
//#endregion

//#region minifyLtrJs Task
function minifyJs(cb) {
  src([
    'content/js/jquery.libraries.call.js',
    'content/js/vendor/timeline.js',
    'content/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(minifyEs5())
    .pipe(dest('content/js'));
  cb();
}
//#endregion

//#region watcher Task
function watcher(cb) {
  watch(['content/sass/*.scss', 'content/sass/*/*.scss'], sassCompile);

  watch(['content/css/main.css'], minifyLtrCss);

  watch(
    [
      'content/js/jquery.libraries.call.js',
      'content/js/vendor/timeline.js',
      'content/js/main.js',
    ],
    minifyJs
  );

  cb();
}
//#endregion

//#region Export Gulp tasks
module.exports = {
  sassCompile,
  minifyRtlCss,
  minifyLtrCss,
  minifyCss: series(minifyRtlCss, minifyLtrCss),

  minifyJs,

  watcher,
};
//#endregion
