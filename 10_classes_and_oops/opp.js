const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got User Details from database.");
        // console.log(`Username : ${this.username}` );
        console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
// What Actually Happens at Runtime:
// 1. user.getUserDetails() gets called:
    // Inside the function, console.log(this); runs and prints:
//     {
//      username: 'hitesh',
//      loginCount: 8,
//      signedIn: true,
//      getUserDetails: [Function: getUserDetails]
//    }
// 2. After printing this, the function reaches its end → returns undefined.
// 3. So now you're basically doing:
//      console.log(undefined);

user.getUserDetails()       //it automatically prints console.log(this);, which is inside the getUserDetails function

// console.log(this);  //for more details, check 03_basics/03_arrow.js
 



function User(username, loginCount, isLoggedIn){    //Constuctor Function
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this    //implictly defined(does mateer , if you write or not)
}

const UserOne = new User("dev", 12, true)   //'this' works only because you used new.
// When new is used:
//     A new empty object is automatically created: {}.
//     this inside the constructor refers to that new object.
//     The properties like this.username = username get attached to that object.
//     The newly created object is implicitly returned.
const UserTwo = new User("Athr", 12, false)

console.log(UserOne.constructor);  
// Every object in JavaScript has a hidden property called constructor.
// It points to the function that was used to create the object.

// in this case, UserOne.constructor === User


// console.log(UserTwo);

