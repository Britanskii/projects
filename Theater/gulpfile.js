const gulp = require('gulp'),
    watch = gulp.parallel(browserSync(params))
// const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
browsersync = require('browser-sync').create()
let project_folder = 'dist',
    source_folder = 'src',
    { src, dest } = require('gulp'),
    path = {
        build: {
            html: project_folder + "/",
            css: project_folder + '/style/',
            js: project_folder + '/script/',
            img: project_folder + '/img/',
            fonts: project_folder + '/fonts/',
        },
        src: {
            html: source_folder + "/",
            css: source_folder + '/sass/',
            js: source_folder + '/script/',
            img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
            fonts: source_folder + '/fonts/',
        },
        watch: {
            html: source_folder + "/**/*.html",
            css: source_folder + '/sass/**/*.sass',
            js: source_folder + '/script/**/*.js',
            img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        },
        clean: "./" + project_folder + "/"
    }

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
    })
}

exports.watch = watch
exports.default = watch


// gulp.task('server', function () {

//     browserSync({
//         server: {
//             baseDir: "src"
//         }
//     });

//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// gulp.task('styles', function () {
//     return gulp.src("src/sass/**/*.+(scss|sass)")
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(rename({ suffix: '.min', prefix: '' }))
//         .pipe(autoprefixer())
//         .pipe(cleanCSS({ compatibility: 'ie8' }))
//         .pipe(gulp.dest("src/style"))
//         .pipe(browserSync.stream());
// });

// gulp.task('watch', function () {
//     gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
// })

// gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
