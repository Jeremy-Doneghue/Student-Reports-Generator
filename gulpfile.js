var gulp = require('gulp');
var sass = require('gulp-sass');
// generates source maps
var sourcemaps = require('gulp-sourcemaps');
// automatically adds vendor prefixes
var autoprefixer = require('gulp-autoprefixer');
// minfies the output
var cssnano = require('gulp-cssnano');
// turns rem into pixels
var pixrem = require('gulp-pixrem');
// allows for the use of postcss plugins
var postcss = require('gulp-postcss');
// fixes flexbox issues
var flexbugs = require('postcss-flexbugs-fixes');
// requires http://livereload.com/extensions/ to work
var livereload = require('gulp-livereload');

// compiles scss files into a singe styles.css file
gulp.task('scss', function () {

	var processors = [
		flexbugs()
	];

	return gulp.src("./build/styles.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(pixrem())
		.pipe(cssnano())
		.pipe(postcss(processors))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./assets/css'))
		.pipe(livereload())
});

// run this to have gulp compile your css when you change scss files
gulp.task('scss:watch', function () {
	livereload.listen();
	gulp.watch('./build/**/*.scss', ['scss']);
});

gulp.task('default', ['scss']);
