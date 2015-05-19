/**
 * Created by jordan on 5/15/15.
 */

var http = require('http');

http.get(process.argv[2], function(response) {
    var resData = '';
    var count = 0;
    response.setEncoding('utf8');
    response.on('data', function(data) {
        resData += data;
        count += data.length;
    });
    response.on('error', function(e) {
        console.error('Problem with request: ' + e.message);
    });
    response.on('end', function() {
        console.log(count);
        console.log(resData);
    });
});