let myName = "Hitesh   "

console.log(myName.trueLength);

let myHeros = ["Thor", "SpiderMan"]
let heroPower = {
    Thor:"hammer",
    SpiderMan:"sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.SpiderMan}`);
        
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all Objects`);
}
// means every object (including arrays, functions, strings, custom objects) can now access hitesh() method.

Array.prototype.heyHitesh  = function(){
    console.log(`Hitesh says Hello`);
    
}
//means only arrays (and things inheriting from Array.prototype) will have access to heyHitesh().

//Array → Object → null   //check Prototype Chain or Hierarchy


// heroPower.hitesh()
myHeros.hitesh()

myHeros.heyHitesh()
Array.hitesh()
// heroPower.heyHitesh()


//inheritance

const User = {
    name : "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVidero: true
}
const TeachingSupport   = {
    isAvailable :false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true,
    __proto__ :TeachingSupport      //TASupport can access all properties of TeachingSupport via the prototype chain.

}

Teacher.__proto__ = User
// same
// Object.setPrototypeOf(Teacher, User);    //Modern Syntax

console.log(Teacher.name);      //Teacher can access all properties of User via the prototype chain.
//not same as 
//console.log(Teacher.prototype.name);  
// This only works if Teacher is a constructor function, because:
//     Only functions (used as constructors) have the .prototype property.
//     Plain objects like const Teacher = {} do not have a .prototype property.


// Prototype Chain Diagram
// TASupport → TeachingSupport → Object.prototype → null
// Teacher → User → Object.prototype → null



//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "DevanshGupta    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh   ".trueLength()        //this -> jisnce call kiya (yahan "hitesh   ")
"iceTea".trueLength()



//another way - > If you want .truelength (not .trueLength())
Object.defineProperty(String.prototype, "trueLength", {
    get: function () {
        // console.log(`${this}`);
        // console.log(`True Length is ${this.trim().length}`);
        return this.trim().length;  // optional, in case you want the value returned too
    }
});

console.log("hiteshasas   ".trueLength) 
//same as first printing 
    // console.log(`${this}`);
    //   console.log(`True Length is ${this.trim().length}`);
// then return this.trim().length;
// which is console.log(this.trim().length) 

console.log(myName.trueLength);
