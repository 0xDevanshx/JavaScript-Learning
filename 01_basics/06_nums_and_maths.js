const score = 400 //type - number(Primitive)
console.log(score);


const balance = new Number(100)  //type - object (number)
console.log(balance); 

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 13.67547
console.log(otherNumber.toPrecision(3)); //3 signifies the here is precision till 3 digits including number before decimal
console.log(otherNumber.toPrecision(1));

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // Output: "10,00,000" (if your system locale is Indian)
console.log(hundreds.toLocaleString("en-US"));

// ++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.min(4,3,5,6));

console.log(Math.random());

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max -min+1))+min);

