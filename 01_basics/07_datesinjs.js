//Date
let myDate = new Date()

console.log(myDate);
console.log(typeof(myDate));


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2020,0,14, 5 , 3)
console.log(myCreatedDate.toString());

let anotherCreatedDate = new Date("01-28-2016")
console.log(anotherCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()   //in miliseconds

console.log(myTimeStamp);    
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));   //in seconds

let newDate = new Date()
console.log(newDate.getHours());

// console.log('${newDate.getTime()} and the time');


newDate.toLocaleString('default',{
    weekday: "narrow",
    hour:"2-digit",
})


