var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      // optional: 'configuration',
      // goes: 'here'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', function() {
  // place code for your default task here
});
