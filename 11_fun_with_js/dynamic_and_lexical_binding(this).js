// ==============================
// 🧠 Understanding `this` in JS
// ==============================

/*
In JavaScript:
- Regular functions use **dynamic binding** for `this`
- Arrow functions use **lexical binding** for `this`
*/


// ----------------------------------
// 🔹 Regular Function: Dynamic `this`
// ----------------------------------

function sayHello() {
    console.log(this.name);
}

const user1 = {
    name: "Devansh",
    greet: sayHello // binding happens at call time
};

user1.greet(); // Devansh

const user2 = {
    name: "Sam",
    greet: sayHello
};

user2.greet(); // Sam

sayHello(); // undefined (in strict mode) or global.name in browser


// ----------------------------------
// 🔹 Arrow Function: Lexical `this`
// ----------------------------------

const user3 = {
    name: "Devansh",
    greet: () => {
        console.log(this.name); // ❌ `this` is NOT `user3`
    }
};

user3.greet(); // undefined

// 🔸 Arrow functions ignore the calling object
//     Even if `user3` calls it, `this` is still inherited from the outer scope.


// ----------------------------------
// 🔍 Why? Lexical `this` Explained
// ----------------------------------

/*
Arrow functions don’t have their own `this`.
They inherit it from where they were **defined**, 
not who **calls** them.
Arrow functions ignore the calling object.
*/

const outerThis = this;

const arrowTest = () => {
    console.log(this === outerThis); // true
};

arrowTest();


// ----------------------------------
// ✅ Comparison: Regular vs Arrow
// ----------------------------------

const example = {
    name: "Devansh",
    
    regular: function() {
        console.log("Regular:", this.name); // Devansh
    },
    
    arrow: () => {
        console.log("Arrow:", this.name); // undefined
    }
};

example.regular();
example.arrow();


// ----------------------------------
// ⚠️ In Node.js top-level: `this` is {}
// ----------------------------------

console.log(this); // {}

const obj = {
    name: "Node",
    arrow: () => {
        console.log(this); // still {}
    }
};

obj.arrow();


// ----------------------------------
// ✅ Where Arrow Functions are Useful
// ----------------------------------

// 1. Callbacks without `this`
setTimeout(() => {
    console.log("Timer finished");
}, 1000);

// 2. Array methods
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled);


// 3. Inside closures to preserve outer `this`
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds); // `this` is Timer instance
    }, 1000);
}
// new Timer();


// ----------------------------------
// ❌ When NOT to use Arrow Functions
// ----------------------------------

// 1. Object methods that need `this`
const objWrong = {
    name: "Devansh",
    speak: () => {
        console.log(this.name); // ❌ undefined
    }
};

// 2. Class methods that access instance props
class Person {
    constructor(name) {
        this.name = name;
    }

    // ✅ `this` is from the class instance, not global
    greet = () => {
        console.log(this.name); // ✅ works because it's using class scope
    }
    
    // ℹ️ Note: Although this works, it's generally recommended
    // to use normal methods in class definitions unless arrow is necessary.
    // ⚠️ Arrow functions ignore the calling object even here.
}

const p = new Person("Devansh");
p.greet();


// ----------------------------------
// 🧠 Summary
// ----------------------------------

/*
✔ Regular Function → Dynamic `this` → depends on how function is called
✔ Arrow Function → Lexical `this` → depends on where function is defined
✔ In Node.js top-level, `this` is {} (not global)
✔ Avoid arrow functions for object methods and class methods
✔ Use arrow functions for simple callbacks and preserving outer `this`
✔ Arrow functions ignore the calling object
*/
