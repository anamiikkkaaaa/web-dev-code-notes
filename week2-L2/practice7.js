const fs = require("fs");

console.log("the code starts here");

function toResolvePromise(resolve){
    console.log("toResolvePromise is called");
    setTimeout( function(){
        console.log("callback based setTimeout is completed");
        resolve();
    }, 3000);
}

function setTimeoutPromisified(){
    console.log("setTimeoutPromisified is called");
    return new Promise(toResolvePromise);
}

function callback(err, data){
    console.log("timer is done");
}

const p = setTimeoutPromisified();

console.log("before .then");

p.then(callback);
console.log("after .then, the end");