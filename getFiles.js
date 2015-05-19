/**
 * Created by jordan on 5/12/15.
 */

var fs = require('fs');
var path = require('path');

var getFiles = function(dirPath, ext, callback) {
    fs.readdir(dirPath, function (err, list) {
        if (err) {
            return callback(err);
        }
        var files = list.filter(function (file) {
            return (path.extname(file) === '.' + ext)
        });
        callback(null, files);
    });
};

module.exports = getFiles;