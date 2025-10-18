const fs = require("fs");

function print(err, data){
    if(err){
        console.log("error")
    }
    else{
        console.log(data);
    }
}
function timeout(resolve){
    fs.readFile('./a.txt', 'utf-8', resolve); // resolve stores the data read from file and gives to callback function(print)
}                                             // waise we would have passed print function in fs.readfile as arg but we passed resolve
                                              //which automatically connects to print function as it is passed in p.then() and resolve arg's function i.e, timeout
let p = new promise(timeout);                 // is passed in promise while creating promise instance
p.then(print);
