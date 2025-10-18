const fs = require("fs");

function print(err, data){
    if(err){
        console.log("throwing some error say file not found")
    }
    else{
        console.log(data);
    }
}
fs.readFile('./a.txt','utf8',print) //print is callback function