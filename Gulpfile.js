var gulp = require('gulp');

// require('./gulp-dev.js');
// require('./gulp-qa.js');
// require('./gulp-staging.js');
// require('./gulp-prod.js')


gulp.task('default', startLocalEnvironment);

function startLocalEnvironment(cb) {
    require('./gulp-local.js');
    gulp.start('local');
    cb();
}
// gulp.task('psuh_To_Dev_Becusae_I_Konw_Waht_Im_Diong_And_Hai_Is_A_Dcik_For_Maikng_Me_Cpoy_And_Psate_Tihs', function () {
//     //to be continue...
// });


