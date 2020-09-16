const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const scss = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('compile-scss', () => {
    return gulp.src('./styles/*.scss')
        .pipe(scss())
        .pipe(cleanCss())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./styles/'));
});

gulp.task('watcher', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("*.js").on("change", reload);
    gulp.watch('./styles/*.scss', gulp.series('compile-scss'), reload);
});
