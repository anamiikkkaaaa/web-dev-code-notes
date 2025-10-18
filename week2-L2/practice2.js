/* instance of an object */
class rectangle {
    constructor(length, width, colour){
        this.length = length;
        this.width = width;
        this.colour = colour;
    }
    area(){
        return this.length*this.width;
    }
    color(){
        console.log(this.colour);
    }
}
const rect1 = new rectangle(2,5,"pink");
console.log(rect1.color());
console.log(rect1.area());

/* map(), date() */
const date = new Date();
console.log(date.toISOString());

const map = new Map();
map.set("name","anamika");
console.log(map.get("name"));