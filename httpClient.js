/**
 * Created by jordan on 5/15/15.
 */

var http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    response.on("data", function(data) {
        console.log(data);
    });
    response.on("error", function(e) {
        console.error('Problem with request: ' + e.message)
    });
});