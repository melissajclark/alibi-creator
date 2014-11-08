// var gulp      = require("gulp"),
// takana    = require("takana");

// gulp.task("default", ["takana"]);
 
// gulp.task("takana", function() {
//   takana.run({
//     path:         "assets/scss/",
//     includePaths: [] // Optional
//   });
// });


var gulp = require('gulp'),

    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    newer = require('gulp-newer');


gulp.task('styles', function(){
  return gulp.src(['assets/scss/*.scss',
                   'assets/scss/**/*.scss'], 
            {base: 'assets/scss/'} )
      .pipe(plumber())
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest(''))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(gulp.dest(''));
});