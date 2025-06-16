function multipleBy5(num){
    return num*5
}
 
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score         
}

createUser.prototype.increment =    function(){
    this.score++;        //'this'  -> jisne bhi yeh call kiya, uska...
}   
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai", 25)
//what 'this' do under the hood
    // 1. A new empty object is created: this = {}
    // 2. The function is called with `this` bound to that object
    // 3. The object gets linked to createUser.prototype
    // 4. The object is returned automatically (unless you return another object manually)
// So effectively:
    // const chai = {
    //     username: "chai",
    //     score: 25,
    //     __proto__: createUser.prototype
    // };
//Then when you call:
    // chai.increment();
// It looks into chai.__proto__ and finds the increment() method defined on createUser.prototype.


const tea = createUser("tea", 250)//need to be included 'new'

chai.increment()
chai.printMe()      //no need to write like this chai.prototype.printMe(), js is self-understandable


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/