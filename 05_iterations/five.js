const coding = ["js","rb","py","java","cpp"]

// coding.forEach(function (item) {
//     console.log(item);  
// })

// coding.forEach((item)=> {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })


const myCoding = [  //object inside array
    {
        languageName: "javascript",
        laguageFileName : "js"
    },
    {
        languageName: "java",
        laguageFileName : "java"
    },
    {
        languageName: "python",
        laguageFileName : "py"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
    
})