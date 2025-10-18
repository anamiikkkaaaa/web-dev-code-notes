//array of objects
const users = [{
    name:"Anamika",
    age:22,
    gender:"female"
}, {
    name:"Harkirat",
    age:30,
    gender:"male"
},{
    name:"Suhani",
    age: 25,
    gender:"female"
},
{
    name:"Arohi",
    age:22,
    gender:"female"
},
{
    name:"Shubramaniam",
    age:25,
    gender:"male"
},{
    name:"Haaniya",
    age:26,
    gender:"female"
    
},{
    name:"payal",
    age:12,
    gender:"female"
},{
    name:"caterpillar",
    age:0.2,
    gender:"idk"
},
]
let output = users.filter(function(user){
    if(user.age>18 && user.gender=="female"){
        return user;
    }
}
for()
);
for(let i=0; i<output.length; i++){
    console.log(output[i]); 
} 