const fs = require("fs"); //name can be diffrent from fs too, 
                          //we're using fs external library(module) in our program
//readFileSync is a function in fs library
const datafromfilea = fs.readFileSync('./a.txt', 'utf-8');
console.log(datafromfilea);

const datafromfileb = fs.readFileSync('./b.txt', 'utf-8');
console.log(datafromfileb); // this is i/o bound but synchronous code

// in simple javascript code, synchronous code means
// all the code is being run, a single line in being run
// in a single thread in the order in which the code is written
// while in asynchronous there is context switching while running 
// the code
// in js asynchronously it is done all tasks are started together 
// then the one done first is logged first
// we studied i/o heavy operations, asynchronous javascript, 
// functional arguments