
console.log("hi!");

function timeout(){
    console.log("timeout function called")
}
console.log("sup")
setTimeout(timeout, 2000); // timeout is callback function, 
                           // called after 2 sec or 2000 ms
                           //settimeout function is a function
                           //available globally we don't need to 
                           // add fs or other library
console.log("done!");