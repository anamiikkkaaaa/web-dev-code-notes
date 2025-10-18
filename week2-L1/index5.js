function timeout(){
    console.log("i/o intensive operation")
}

console.log("hi");

setTimeout(timeout, 1000); // i/o intensive task

console.log("welcome to loupe");

let c=0; //cpu intensive task, this task will keep running 
// and keep consuming all cpu until it's done once it starts
//  so timeout function will wait for it if it started together 
// or before then pehle ho jata
for(let i=0;i<10000000000;i++){
    c=c+1;
}
console.log("expensive task done");