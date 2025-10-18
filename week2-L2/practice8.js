const fs = require("fs");

console.log("the code starts here");

function readTheFile(resolve){
    console.log("readTheFile is called");
    fs.readFile('a.txt', 'utf-8', resolve);
}
