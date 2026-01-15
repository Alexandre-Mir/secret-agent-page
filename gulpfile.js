const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const gulpif = require("gulp-if");

const paths = {
    styles: {
        src: "src/scss/*.scss",
        dest: "dist/css"
    },
    scripts: {
        src: "src/js/*.js",
        dest: "dist/js"
    },
    images: {
        src: "src/images/**/*",
        dest: "dist/images"
    }
}

// Compila SASS para CSS
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minifica JS
function scripts() {
  return gulp.src(paths.scripts.src)
  .pipe(uglify().on("error", function(err) { console.error(err.toString()); this.emit("end"); }))
  .pipe(rename({ suffix: ".min" }))
  .pipe(gulp.dest(paths.scripts.dest));
}

function images() {
  return gulp.src(paths.images.src, { encoding: false })
    .pipe(gulpif(file => !file.path.endsWith('.svg'), imagemin().on("error", function(err) {
      console.error("Erro no imagemin:", err);
      this.emit("end");
    })))
    .pipe(gulp.dest(paths.images.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.default = gulp.parallel(styles, scripts, images, watch);
