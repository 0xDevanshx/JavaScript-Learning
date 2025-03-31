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

console.log(this);

function one(){
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
}

one()

// const chai =function(){       //same
//     let username = "hitesh"
//     console.log(this);
//     console.log(this.username);
// }
// chai()

const chai = () => {       
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
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
