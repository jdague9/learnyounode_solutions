/**
 * Created by jordan on 5/12/15.
 */
var fs = require('fs');

var lines = fs.readFileSync(process.argv[2]).toString().split("\n");

console.log(lines.length - 1);