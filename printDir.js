/**
 * Created by jordan on 5/12/15.
 */

var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, list){
    if(err){
        console.log(err);
    } else {
        var files = list.filter(function(fname){
            return fname.slice(fname.length - ext.length, fname.length) === ext && fname.length != ext.length;
        });
        for(var i = 0; i < files.length; i++) {
            console.log(files[i]);
        }
    }
});