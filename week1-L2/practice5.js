function greetings(user){
    if(user.gender=="female"){
        console.log("Mrs "+user.name+",your age is "+user.age);
    }
    else if(user.gender=="others"){
        console.log("others "+user.name+",your age is "+user.age);
    }
    else{
        console.log("Mr "+user.name+",your age is "+user.age);
    }
}
let user = {
    name:"Anamika",
    age: 22,
    gender:"female"
} //user is an object
greetings(user);