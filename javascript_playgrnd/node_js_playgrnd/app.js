var fs = require('fs');

// fs.unlink('writeMe.txt',function(err){
//     if(err)throw err;s
// });
// fs.mkdirSync('stuff'); //make directory
// fs.rmdirSync('stuff');//remove directory

// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeMe.txt',data,function(err){
//             if(err)throw err;
//         });
//     });
// });

fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff',function(err){
        if(err)throw err;
    });
})