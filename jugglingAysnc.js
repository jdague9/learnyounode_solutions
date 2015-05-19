/**
 * Created by jordan on 5/15/15.
 */

var http = require('http');

var results = [];
var count = 0;

function printResults() {
    for(var i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(process.argv[index + 2], function (response) {
        var resData = '';
        response.setEncoding('utf8');
        response.on('data', function (data) {
            resData += data;
        });
        response.on('error', function (e) {
            console.error('Problem with request: ' + e.message);
        });
        response.on('end', function () {
            results[index] = resData;
            count++;
            if (count === 3) {
                printResults();
            }
        });
    });
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}