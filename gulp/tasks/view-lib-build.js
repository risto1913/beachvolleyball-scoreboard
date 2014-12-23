var gulp = require('gulp');
var source = require('vinyl-source-stream');
var handleErrors = require('../util/handle-errors');
var fs = require('fs');

function createSingleBundle(path) {
    basedir = __dirname + '/../../';
    sourcefile = basedir + path.input;
    if (!fs.existsSync(sourcefile)) {
        throw new Error('Sourcefile ' + sourcefile + ' do not exist' );
    }
    gulp.src(sourcefile)
        .on('error', handleErrors)
        .pipe(gulp.dest(path.output));
}

function createBundles(bundles) {
    bundles.forEach(function (bundle) {
        createSingleBundle(bundle);
    });
}

gulp.task('css', function () {
    createBundles([
            {
                input: './client/css/app.css',
                output: './public/css'
            },
        ]
    );
});