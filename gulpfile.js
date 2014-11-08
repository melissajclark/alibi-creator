var gulp      = require('gulp'),
    takana    = require('takana');
 
gulp.task('takana', function() {
  takana.run({
    path:         __assets,
    includePaths: [] // Optional
  });
});