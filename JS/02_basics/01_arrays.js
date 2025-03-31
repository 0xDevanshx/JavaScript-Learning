//array

const myArr = [0,1,2,3,4,5]

console.log(myArr);
console.log(typeof(myArr));

const myArr2 = new Array(1,2,3,4)
console.log(myArr2);
console.log(typeof(myArr2));

//Array Methods

myArr.push(6);
myArr.push(7)
console.log(myArr);
myArr.pop();

myArr.unshift(9)   //not mostly used, as it shift all value in array, even in larger array, time consuming
myArr.unshift(10)
console.log(myArr);

myArr.shift()
console.table(myArr);   //sometimes use table intead of log, sometjing different (check output)

const newArr = myArr.join() //adds all elememt of the array in the string
console.log(newArr);
console.log(typeof(newArr));

//slice & slpice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)  //not only includes value of last index in variable 
// but also removes the selected values form the main array (edit the main array)

console.log(myn2); 
console.log("c ", myArr);

console.log(...myArr);  //spread operator (expand iterable elements (like arrays, objects, or strings) into individual elements)

const merged = [...myArr, ...myArr2];
console.log(merged);
