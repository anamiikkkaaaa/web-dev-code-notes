function waitfor3sec(resolve){
    setTimeout(resolve,5000);
}

function callback(){
    console.log("hii");
}

waitfor3sec(callback);