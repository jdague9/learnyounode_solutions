/**
 * Created by jordan on 5/18/15.
 */
var net = require('net');

function zerofill(i) {
    return (i < 10 ? '0' : '') + i;
}

function now(){
    var date = new Date();
    return date.getFullYear() + '-'
        + zerofill(date.getMonth() + 1) + '-'
        + zerofill(date.getDate()) + ' '
        + zerofill(date.getHours()) + ':'
        + zerofill(date.getMinutes());
}


var server = net.createServer(function(socket) {
    socket.end(now() + '\n');
});
server.listen(Number(process.argv[2]));