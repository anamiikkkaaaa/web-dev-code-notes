function random(resolve){     //resolve is also a fuction
    resolve(); // resolve gets called after 0 sec
}

let p = new Promise(random); //instance of a promise class, a promise is 
                             // supposed to return something eventually
console.log(p);              //promise will get completed when
                             // the first argument of the function 
                             //passed in promise gets called 
                             //here it is resolve
                             //whenever resolve is called it'll call 
                             //the function in then
function callback(){
    console.log("promise succeeded");
}
p.then(callback);