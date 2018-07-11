var fs = require('fs');

// var readMe = fs.readFileSync('readme.txt', 'utf8');
// fs.writeFileSync('writeMe.txt',readMe);
fs.readFile('readme.txt', 'utf8', function (err, data) {
   fs.writeFile('writeMe.txt',data,function(err){
       if(err)throw err;
   });
});

//console.log('test');// this line of code is not blocked by readfile