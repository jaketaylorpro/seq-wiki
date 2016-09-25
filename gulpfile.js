var gulp = require('gulp');
var webpack = require('webpack-stream');

var concat = require('gulp-concat');
//var stripDebug = require('gulp-strip-debug');
//var uglify = require('gulp-uglify');

var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');
var expect = require('gulp-expect-file');

var webpackOptions = {
    resolve: {
        extensions: ['', '.js', '.jsx','.json']
    },
    externals: {
        // Use external version of everything we build to node_modules
        // this prevents it from being loaded twice (first in node_modules.js and second by webpack)
        'react': 'React',
        'jquery':'jQuery',
        'react-dom':'ReactDOM',
        'sequence-diagram':'Diagram'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader:'babel',
                query:{
                    presets:['react','es2015'],
                    compact: false
                }
            },
            {
                include: /\.json$/,
                loaders: ['json-loader']
            }
        ]
    }
};

gulp.task('node_modules_js', () => {
    var files = [
        'node_modules/jquery/dist/jquery.js',
        'node_modules/babel-polyfill/dist/polyfill.js',
        'node_modules/react/dist/react-with-addons.js',
        'node_modules/react-dom/dist/react-dom.js',
        'node_modules/tether/dist/js/tether.js',
        'node_modules/underscore/underscore.js',
        'other_modules/raphael.js',
        'other_modules/sequence-diagram-min.js'
    ];
    return gulp.src(files)
        .pipe(concat('node_modules.js'))
        .pipe(expect(files))
        // .pipe(uglify())
        .pipe(gulp.dest('static'));
});


gulp.task('node_modules_css', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.css',
        'node_modules/tether/dist/css/tether.css'
    ])
        .pipe(sass())
        .pipe(postcss([autoprefixer({ browsers: ['> 1%'] })]))
        .pipe(concatCss('node_modules.css'))
        // .pipe(cssnano())
        .pipe(gulp.dest('static'));
});

gulp.task('application-jsx', () => {
    return gulp.src(['js/**/*.jsx'])
        .pipe(webpack(webpackOptions))
        .pipe(concat('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('static'));
});


gulp.task('application-sass', () => {
    return gulp.src(['scss/*.scss'])
        .pipe(sass())
        .pipe(postcss([autoprefixer({ browsers: ['> 1%'] })]))
        .pipe(concatCss('style.css'))
        // .pipe(cssnano())
        .pipe(gulp.dest('static'));
});

gulp.task('build', ['node_modules_js','node_modules_css', 'application-sass', 'application-jsx'] ,() => {

});