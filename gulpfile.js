/**
 * Created by Manu on 3/15/2016.
 */
// Gulp 4
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemap = require('gulp-sourcemaps');
var del = require('del');
var browserSync = require('browser-sync');

var config = require('./gulp.config')();
var tsProject = tsc.createProject('tsconfig.json');

var paths = {
    dirs: {
        build: config.toOutputPath
    },
    typescript: config.allTs,
    typings: config.typings,
    html: config.allHtml,
    css: config.allCss,
    images: config.allImages,
    json: config.allJson,
    js: config.allJs,
    sass: './src/**/*.scss',
    less: './src/**/*.less',
    assets: config.allAssets,
    vendor: {
        semantic: {
            all: './src/semantic/**/*.*'
        }
    }
};

gulp.task('clean', function () {
    return del(paths.dirs.build);
});

// Development build specific tasks
gulp.task('html', function () {
    return gulp.src(paths.html, { base: 'src' })
        .pipe(gulp.dest(paths.dirs.build));
});

gulp.task('css', function () {
    return gulp.src(paths.css, { base: 'src' })
        .pipe(gulp.dest(paths.dirs.build))
        .pipe(browserSync.reload({stream:true}));
});

/*
gulp.task('json', function () {
    return gulp.src(paths.json)
        .pipe(gulp.dest(paths.dirs.build));
});

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(gulp.dest(paths.dirs.build));
});

gulp.task('images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.dirs.build));
});
*/

gulp.task('assets', function () {

    var sourceAssetFiles = [
        paths.assets,
        './src/config.js',
        './src/favicon.ico'
    ];

    return gulp.src(sourceAssetFiles, { base: 'src' })
        .pipe(gulp.dest(paths.dirs.build));
});

gulp.task('semantic', function () {
    return gulp.src(paths.vendor.semantic.all, { base: 'src' })
        .pipe(gulp.dest(paths.dirs.build));
});


gulp.task('ts-lint', function () {
    return gulp.src(paths.typescript)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emmitError: true
        }));
});

gulp.task('compile-ts', function() {

    var sourceTsFiles = [
        paths.typescript,
        paths.typings
    ];

    var toResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemap.init())
        .pipe(tsc(tsProject));

    toResult.dts.pipe(gulp.dest(paths.dirs.build));

    return toResult.js
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest(paths.dirs.build));
});

//gulp.task('copy', gulp.parallel('html', 'json', 'js', 'css', 'images', 'assets'));
gulp.task('copy', gulp.parallel('html', 'css',  'assets'));
gulp.task('copy-all', gulp.parallel('copy', 'semantic'));
gulp.task('build', gulp.series('clean', 'copy-all', 'ts-lint', 'compile-ts'));


gulp.task('watch:styles', function () {
    gulp.watch(paths.css, 'css');
});

gulp.task('watch:assets', function () {
    gulp.watch(paths.assets, 'assets');
});

gulp.task('watch:code', function () {
    gulp.watch([
        paths.html,
        paths.json,
        paths.js,
        paths.images,
    ], gulp.series('build', browserSync.reload));
});

gulp.task('watch', gulp.parallel('watch:code', 'watch:styles', 'watch:assets'));

// Default task
gulp.task('default', gulp.series('build', 'watch'));