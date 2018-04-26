var fs = require('fs');
var compressor = require('node-minify');

var source = process.argv[2],
    target = source.replace(".js",".min.js");

compressor.minify({
  compressor: 'gcc',
  input: source,
  output: target,
  callback: function (err, min) {}
});

