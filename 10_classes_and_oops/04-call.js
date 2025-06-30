function SetUsername(username){
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){
    // SetUsername(username)     // this = undefined (or global)

    // You call it like a normal function, not with new or not with .call(this).
    // So a new Execution Context (EC) is created for SetUsername.

    //     In that EC:
    //     this is now either:
    //         The global object (window in browser) if non-strict
    //         undefined if strict mode ('use strict')
    // 🚫 So this.username = username assigns the username not to the object you're creating, but somewhere else.

    //actually after running SetUsername() func, its execution context of the functions gets removed from call stack , so all variables declareed inside it, also gets removed

    //so
    SetUsername.call(this, username)        //Runs SetUsername(username) — but bind this to whatever this is right now in createUser.

    //Example:
    // If you just say: "Write 'Devansh'" → They might write it in their own notebook.
    // But if you say: "Write 'Devansh' in my notebook" → It ends up where you want it.

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@example.com", "1234@asdfg")
console.log(chai);
