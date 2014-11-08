var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    server = lr();

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

gulp.task('default', ['styles']);

gulp.task('watch', function() {
  // Listen on port 35729
  server.listen(35729, function (err) {
      if (err) {
        return console.log(err);
      }
  
      // Watch .scss files
      gulp.watch('assets/scss/*.scss', ['styles']);
      gulp.watch('assets/scss/**/*.scss', ['styles']);
  
    });

});