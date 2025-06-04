//singleton
// Object.create

//object literals

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name:"Devansh",
    "full name":"Devansh Gupta",
    //task - take a symbol and act as key
    mySym1 : "myKey1",    //not correct syntax  
    [mySym2] : "myKey2",  //correct syntax
    key: mySym2,   // Storing the symbol as a value
    age : 18,
    email : "devansh.gupta@google.com",
    isLoggedIn:false,
    lastLoginDays : ["Mondays","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //can't be access by JsUser.full name    (as key name consists spaces)

console.log(JsUser.mySym1);
console.log(typeof JsUser.mySym1);

console.log(JsUser[mySym2]);
console.log(typeof JsUser[mySym2]);  //its showing the data type of value stored in the symbol key, which is "myKey2" (a string)
 
console.log(typeof JsUser.key);  //showing data type 

JsUser.email = "devansh.gupta@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "devansh.gupta@microsoft.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


