var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', function() {
  // place code for your default task here
});
