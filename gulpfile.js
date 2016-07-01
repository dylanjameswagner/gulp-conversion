// gulp
var gulp   = require('gulp');
var notify = require('gulp-notify');

// delete
var del = require('del');

// styles
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// scripts
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// images
var cache    = require('gulp-cache');
// var imagemin = require('gulp-imagemin');

// watch
var changed     = require('gulp-changed');
var browserSync = require('browser-sync');

gulp.task('default', [
	'build',
	'watch'
]);

gulp.task('build', [
	'styles',
	'scripts',
	'scripts-modernizr',
	'images',
	'fonts',
]);

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('source/styles/**/*.scss', ['styles']);
	gulp.watch('source/scripts/**/*.js',  ['scripts']);
	// gulp.watch('source/images/**/*',      ['images']);
	// gulp.watch('source/fonts/**/*',       ['fonts']);
	gulp.watch('**/*.php', browserSync.reload);
});

gulp.task('browserSync', ['build'], function() {
	browserSync.init([
		'public/styles/*.css',
		'public/scripts/*.js',
		'**/*.php'
	], {
		host: 'conversion.local', // This tells browser sync what URL to open on load with port 3000
		// port: 4000, // This is if you want to change the port
		proxy: {
			target: 'conversion.local:8888', // This is the link to your local as it is in MAMP
		},
		open: "external",
		snippetOptions: {
			ignorePaths: [
				"wp-admin/**",
				"wp/wp-admin/**"
			]
		}
	});
});

gulp.task('styles', function(){
	return gulp.src('source/styles/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', notify.onError("\nError: <%= error.message %>")))
		.pipe(sass({
			includePaths: '/',
			outputStyle: 'compressed',
		}).on('error', notify.onError("Error: <%= error.message %>")))
		.pipe(autoprefixer({
			browsers: ['last 2 version'],
		}))
		.pipe(sourcemaps.write())
		// .pipe(changed('public/styles'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('public/styles'));
});

gulp.task('scripts', function(){
	return gulp.src([
			'source/scripts/script.js',
		])
		.pipe(concat('script.js'))
		// .pipe(browserify())
	    .pipe(uglify())
		.on('error', notify.onError("Error: <%= error.message %>"))
		// .pipe(changed('public/scripts'))
		.pipe(gulp.dest('public/scripts'));
});

gulp.task('scripts-modernizr', function() {
	return gulp.src('source/scripts/modernizr.js')
		.pipe(changed('public/scripts'))
		.pipe(gulp.dest('public/scripts'));
});

gulp.task('images', function() {
	return gulp.src('source/images/**/*.+(png|jpg|jpeg|gif|svg)')
		// .pipe(imagemin())
		// .pipe(cache(imagemin({
		// 	interlaced: true,
		// })))
		// .pipe(changed('public/images'))
		.pipe(gulp.dest('public/images'));
});

gulp.task('fonts', function() {
	return gulp.src('source/fonts/**/*')
		.pipe(changed('public/fonts'))
		.pipe(gulp.dest('public/fonts'));
});

gulp.task('clean:public', function() {
	del([
		'public/**',
		'!public',
	]);
});

gulp.task('clean:cache', function() {
	return cache.clearAll();
});
