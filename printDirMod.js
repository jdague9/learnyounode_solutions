/**
 * Created by jordan on 5/12/15.
 */

var getFiles = require('./getFiles.js');

getFiles(process.argv[2], process.argv[3], function(err, list) {
    if(err){
        console.log("An error occurred!");
    }
    list.forEach(function(element) {
        console.log(element);
    })
});