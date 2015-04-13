var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var copy = require( 'gulp-contrib-copy' );

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});

 
gulp.task( 'copy', function() {
    gulp.src( ['src/scripts/**/*.js', 'src/images/**/*.*'], {base: 'src'} )
    .pipe( copy({ log: true }) )
    .pipe( gulp.dest( 'build' ) );
});

gulp.task('less', function() {
    gulp.src('src/styles/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('build/styles'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', ['less']);
    gulp.watch(['src/images/**/*.*', 'src/scripts/**/*.js'], ['copy']);
});

gulp.task('default', ['copy', 'less', 'webserver', 'watch']);