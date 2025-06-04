const myObject ={
    js : 'javascipt',
    cpp: 'C++',
    rb: 'ruby',
    swift : "swift by apple"

}

for(const value in myObject){
    console.log(`${value} shortcut is for ${myObject[value]}`);
    
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(programming[key]);
    console.log(key); //if its for of, then we will get value, not key
    
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }