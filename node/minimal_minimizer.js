var  fs = require('fs');
var  source = process.argv[2],
     target = source.replace(".js",".min.js");

fs.readFile(source,'utf8', (err, data) => {
  if (err) throw err;
  var min = data.replace(/[\n\r]/g,"");
  fs.writeFile(target, min, (err) => {
    if (err) throw err;
    console.log(`It's saved!`);
  });
});

