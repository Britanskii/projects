const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    group_media = require('gulp-group-css-media-queries')
//Не рабочая шняга
// postcss = require('gulp-postcss');
//Разобраться с base64
// base64 = require('base-64'),
// font2css = require('gulp-font2css').default,
// concat = require('gulp-concat'),
// utf8 = require('utf8')

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(
            group_media()
        )
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(autoprefixer({
            overrideBrowsersList: ['last 5 versions'],
            cascade: true
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest("src/style"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/res/img/**", gulp.series('images'));
    //Добавь min js
    // gulp.watch("src/script/**/*.js").on('change', gulp.parallel('scripts'));
    //Как разберёшься делай
    // gulp.watch("src/res/img/**").on('all', gulp.parallel('images'));
    // gulp.watch('src/fonts/**/*.{otf,ttf,woff,woff2,eot,svg}').on('change', gulp.parallel('fonts'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

//Добавь min js
// gulp.task('scripts', function () {
//     return gulp.src("src/script/**/*.js")
//         .pipe(gulp.dest("src/script"))
//         .pipe(browserSync.stream());
// });

gulp.task('images', function () {
    return gulp.src("src/res/img/**")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 3
        }))
        // Webp convert 
        /* .pipe(webp({
            quality: 100
        }
        ))
        .pipe(gulp.dest("src/res/webp/")) */
        .pipe(gulp.dest("src/res/compressed/"))
        .pipe(browserSync.stream());

});


//Разобраться с base64
// gulp.task('fonts', function () {
//     return gulp.src('src/fonts/**/*.{otf,ttf,woff,woff2}')
//         .pipe(font2css())
//         .pipe(concat('fonts.css'))
//         .pipe(gulp.dest('src/style'));
// })



gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'images'));