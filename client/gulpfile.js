var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var minimist = require('minimist');
const fs = require('fs');
var dom  = require('gulp-dom');

var lessFiles = ['styles/less/*.less'];

var args = minimist(process.argv.slice(2), {
    string: 'name',           // --lang xml
    boolean: ['version'],     // --version
    alias: { v: 'version' }
});

gulp.task('compile', function () {
    gulp.src(lessFiles)
        .pipe(concat('kings-well.less'))
        .pipe(less())
        .pipe(gulp.dest('styles/'))
        .pipe(minify())
        .pipe(rename('kings-well.min.css'))
        .pipe(gulp.dest('styles/'))
});

gulp.task('c', function () {
    var name = args.name;
    var nameArr = name.split(/(?=[A-Z])/);
    var mainDir = 'app/components/';
    var foldername = '';
    for (var i = 0; i < nameArr.length; i++) {
        foldername = foldername + nameArr[i].toLowerCase() + '-';
    }
    var templateName = foldername + 'template.html';
    var controllerName = name + 'Ctrl.js';
    var componentName = foldername.slice(0, -1);

    //Creating the component folder and files
    if (!fs.existsSync(mainDir + componentName + '/' + templateName)) {
        fs.mkdirSync(mainDir + componentName);
        fs.openSync(mainDir + componentName + '/' + templateName, 'w', function (err, file) {
            console.log("created template...");
            if (err) throw err;
        });
        fs.openSync(mainDir + componentName + '/' + controllerName, 'w', function (err, file) {
            console.log("created controller...");
            if (err) throw err;
        });
    }

    //Adding js dependency to index file
    var srcUrl = mainDir + componentName + '/' + controllerName;
    return gulp.src('./index.html')
        .pipe(dom(function(){
            var newScript = this.createElement('script');
            newScript.setAttribute('src', srcUrl);
            this.body.appendChild(newScript);
            this.write('\n');
            return this;
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('s', function() {
    var mainDir = 'app/services/';
    var serviceName = mainDir + args.name + 'Ctrl.js';
    if (!fs.existsSync(serviceName)) {
        fs.openSync(mainDir + serviceName, 'w', function (err, file) {
            console.log("created ctrl...");
            if (err) throw err;
        });
    }
});

gulp.task('watch', function () {
    gulp.watch(lessFiles, ['compile'])
});