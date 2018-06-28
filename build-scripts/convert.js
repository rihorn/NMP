//use fs to read the shapes.json file

fs - require('fs');
fs.readFile('../working-files', 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }
  console.log(data);
});