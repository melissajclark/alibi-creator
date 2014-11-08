var gulp      = require('gulp'),
    takana    = require('takana');
 
gulp.task('takana', function() {
  takana.run({
    path:         assets,
    includePaths: [] // Optional
  });
});