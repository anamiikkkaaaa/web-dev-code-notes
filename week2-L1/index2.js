const fs = require("fs");

function print(err, data){
    console.log(data);
}
fs.readFile('./a.txt', 'utf8', print); 
//asynchronous, whenever the reading is done it'll call the
// function print
// readfile is an asynchronous function that takes callback(print fucntion)
//as input and then calls is when it's done reading
fs.readFile('./b.txt','utf8', print);
console.log("done!");
//done is logged first, why? we're not waiting
// for the reading of file all 3 tasks starts
// at the same time
// logging done takes less time
//so consequently hi there and how you doin' is printed