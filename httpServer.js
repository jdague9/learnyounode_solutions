/**
 * Created by jordan on 5/18/15.
 */
var http = require('http');
var fs = require('fs');

var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(filePath).pipe(res);
});
server.listen(process.argv[2]);