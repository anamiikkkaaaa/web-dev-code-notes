function sum(num1,num2){
    return num1+num2;
}
console.log(sum(2,3));
console.log(sum("three", "five"));
//console.log(sum(2,a));
function canVote(age){
    if(age>=18){
        return true;
     }
     else{
        return false;
    }
 }
console.log(canVote(18));
function sum(a,b){
    return parseInt(a)+b; //parseint is used so that even if we
 }                         //pass string as arg it'll change it 
 let ans = sum("3",6);     //to integer and give us the correct answer
 console.log(ans);