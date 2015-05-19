/**
 * Created by jordan on 5/18/15.
 */

var http = require('http');
var url = require('url');

function parseTime(time) {
    var d = new Date(time);
    return JSON.stringify({
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds()
    });
}
function unixTime(time) {
    return JSON.stringify({ unixtime: Date.parse(time) });
}
var server = http.createServer(function(req, res){
    if (req.method != 'GET')
        return res.end('Send me a GET!\n');
    res.writeHead(200, {'content-type': 'application/json'})
    var reqData = url.parse(req.url, true);
    if(reqData.pathname === '/api/parsetime') {
        res.end(parseTime(reqData.query.iso));
    }
    if(reqData.pathname === '/api/unixtime') {
        res.end(unixTime(reqData.query.iso));
    }
});
server.listen(process.argv[2]);