const promiseOne = new Promise(function(resolve,reject){    //Promise is an object
    //Do an async task
    //BD calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completes');
        resolve()
        
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({username :"Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user); 
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if (!error){
            resolve({username:"hitesh", password:"123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{  //chaining, the arguments store the return of previous one
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=> console.log("Promise is either resolve or rejected"))

// async function getData() {
//     try {
//         const res = await fetch("https://api.github.com/users/0xDevanshx");
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error occurred:", error);
//     } finally {
//         console.log("Always runs");
//     }
// }
// getData()

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{ 
        let error = true
        if (!error){
            resolve({username:"javaScipt", password:"123"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
    
// }

//const response = await promiseFive;
//      same as
// promiseFive.then((response) => {
//     console.log(response);
// });

//to handle for reject, use try...catch

async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
    // finally{

    // }
}

consumePromiseFive() 


// async function getAllUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")       //fetch() is absolutely a Promise-based function.
         
//         const data = await response.json()
//         console.log(data);  
//     }catch(err){
//         console.log(err);
        
//     }
    
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())  //no use await, as if this '.then' ends, then only other '.then' starts
.then((data)=>console.log(data))
.catch((err)=> console.log(err))


