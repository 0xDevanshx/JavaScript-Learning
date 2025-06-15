const user ={
    username: "devansh",
    price:"999",

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);  //this refer to current context
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);  //In a browser, this refers to the global object, which is window.
                    //In Node.js, this refers to an empty object ({}), because top-level this is not the global object in modules.

function one(){
 
    let username = "hitesh"
    console.log(this);  // this -> for its object, if not inside in object, its global
                        //In Node.js, when you call a function like this (not attached to an object), inside the function:
                        // this refers to the global object, which in Node.js is called global.
    console.log(this.username);
}

one()

// const chai =function(){       //same
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);
// }
// chai()

const chai = () => {  //function (not object)

    let username = "hitesh"
    console.log(this);  // Arrow functions inherit `this` from their defining scope; at module top-level in Node.js, `this` is `{}`, not `global`

    console.log(this.username); //username is not on this
}
chai()

// const addTwo = (num1 , num2) => {    //explicit return
//     return num1+num2;
// }

// const addTwo = (num1 , num2) => num1+num2;   //implicit return
const addTwo = (num1 , num2) => (num1+num2);  //same 

console.log(addTwo(3,4));

const addThree = (num1, num2)=> ({username:"fhds"})
console.log(addThree(4,6));




// console.log(this); // ➜ {}

// function show() {
//     console.log(this);
// }
// show(); // ➜ [global object]
  
