'use strict';

const gulp = require("gulp"); // модуль Gulp 4
const sass = require("gulp-sass"); // модуль для компиляции sass кода в css
const plumber = require("gulp-plumber"); // модуль для отслеживания ошибок
const postcss = require("gulp-postcss"); // // модуль для генерации карты исходных файлов
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const autoprefixer = require("autoprefixer"); // модуль для автоматической установки автопрефиксов
const minify = require("gulp-csso");
// const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin"); // плагин для сжатия PNG, JPEG, GIF и SVG изображений
// const svgstore = require("gulp-svgstore");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
const run = require("run-sequence");
const del = require("del"); // плагин для удаления файлов и каталогов
const sourceMaps = require("gulp-sourcemaps"); // модуль для генерации карты исходных файлов

//  преобразование стилий
function style(done) {
    gulp.src('source/sass/style.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({
                browsers: [
                    "last 1 version",
                    "last 30 Chrome versions",
                    "last 2 Firefox versions",
                    "last 2 Opera versions",
                    "last 2 Edge versions"
                ]
            })
        ]))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('source/css'))
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('source/css'))
        .pipe(browserSync.stream());

    done()
}

// преобразование html для svg например
function html(done) {
    gulp.src('source/*.html')
        .pipe(posthtml([include()]))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());

    done()
}

function minimazeImg (done) {
    gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("source/img"));

    done()
}

function copy(done) {
    gulp.src([
        'source/fonts/**/*',
        'source/img/**',
        'source/js/**',
        `source/css/**/*.min.css`
    ], {
        base: 'source'
    })
        .pipe(gulp.dest('build'));

    done()
}

function clean(done) {
    del('build');

    done()
}

function watcher(done) {
    browserSync.init({
        server: 'source/'
    });

    gulp.watch('source/sass/**/*.{scss, sass}', gulp.series(style));
    gulp.watch('source/*.html', gulp.series(html)).on('change', browserSync.reload);

    done()
}

module.exports = {
    default: gulp.series(
        style,
        html,
        watcher
    ),
    watcher,
    minimazeImg,
    build: gulp.series(
        clean,
        copy,
        style,
        html
    )
};

//Пример кода из gulp 3
/* gulp.task('styles', style);
gulp.task('html', html);
gulp.task("images", minimazeImg);
// gulp.task('serve', ['style'], watcher);
gulp.task('watcher', gulp.series('styles', (serve)), watcher); */

// пример кода gulp 4
/*module.exports = {
    default: watcher,
    watcher,
    build: gulp.series(
        compileJade,
        compileScss,
        compileScripts,
        makeHash
    ),
    jade: compileJade,
    style: compileScss,
    script: compileScripts,
    hash: makeHash
}*/

