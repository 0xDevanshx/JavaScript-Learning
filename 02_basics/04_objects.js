const tinderUser = new Object();    //singleton object
// const tinderUser = {}               //not a singleton object

tinderUser.id = "123dev"
tinderUser.name = "Smay"
tinderUser.isLoggedIn = false

console.log(tinderUser);   //both output same
console.log(typeof tinderUser);

const regularUser = {    //nested objects
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Devansh",
            lastname : "Gupta"
        }
    }
}

console.log(regularUser.fullname);

const obj1 ={1:"a" ,2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2} 
// const obj3 = Object.assign({},obj1, obj2)  //(target,source,source,...)  {copy all source and paste into target}
// const obj3 = {...obj1,obj2} //spread

// console.log(obj3);
console.log(obj1)

const users = [         //objects inside a array
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:3,
        email:"b@gmail.com"
    },
    {
        id:2,
        email:"f@gmail.com"
    },
]

console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //output data type  - array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "js in hindi",
    price: "999",
    courseInteractor : "Hitesh"
}

// course.courseInteractor

//Object Destucturing
const {courseInteractor: intructor} =course //alternate method
console.log(intructor);

//API FILES

// {
//     "name": "hitesh",
//     "coursename" :"js in hindi",
//     "price ": "free"
// }

// [
//     {},
//     {},
//     {}
// ]