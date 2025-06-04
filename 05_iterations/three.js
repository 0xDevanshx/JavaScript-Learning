//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello Guys"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    console.log("Each char is",greet) ;
}

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR', "France")

for (const key of map) {
    console.log(key);
    
}
for (const [key, value] of map) {
    console.log(key);
    
}

const myObject = {
    game1:'NFS',  
    game2: 'SpiderMan'
}
for (const key of myObject) {   //Object not iterable
    console.log(key);
    
}
