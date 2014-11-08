var gulp      = require("gulp"),
takana    = require("takana");

gulp.task("default", ["takana"]);
 
gulp.task("takana", function() {
  takana.run({
    path:         "assets/scss/",
    includePaths: [] // Optional
  });
});