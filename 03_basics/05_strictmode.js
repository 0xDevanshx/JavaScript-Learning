// =====================
// Non-Strict Mode Demo
// =====================

function nonStrictDemo() {
    // 1. Undeclared variables become globals
    undeclaredVar = "I'm global in non-strict";
    console.log("undeclaredVar:", undeclaredVar); // "I'm global in non-strict"

    // 2. Silently fails when assigning to a read-only property
    const obj = {};
    Object.defineProperty(obj, "fixed", { value: 42, writable: false });
    obj.fixed = 100; // no error, but assignment is ignored
    console.log("obj.fixed:", obj.fixed); // 42

    // 3. 'this' inside a regular function refers to global
    function showThis() {
        console.log("showThis (non-strict):", this);
    }
    showThis(); // global object (window in browser, [global] in Node)

    // 4. Duplicate parameter names allowed
    function dupParams(a, a) {
        console.log("dupParams result:", a); // second 'a'
    }
    dupParams(1, 2); // logs 2
}

nonStrictDemo();

console.log("\n---------------------------\n");

// =================
// Strict Mode Demo
// =================

function strictDemo() {
    "use strict";

    // 1. Undeclared variables throw ReferenceError
    try {
        strictVar = "won't work";
    } catch (e) {
        console.log("Error (undeclaredVar):", e.message);
    }

    // 2. Throws when assigning to a read-only property
    const obj = {};
    Object.defineProperty(obj, "fixed", { value: 42, writable: false });
    try {
        obj.fixed = 100; // TypeError in strict mode
    } catch (e) {
        console.log("Error (assign to read-only):", e.message);
    }

    // 3. 'this' inside a regular function is undefined
    function showThisStrict() {
        console.log("showThisStrict (strict):", this);
    }
    showThisStrict(); // undefined

    // 4. Duplicate parameter names cause SyntaxError
    try {
        // this inner function will never be created due to syntax error
        const fn = new Function("a", "a", "'use strict'; return a;"); 
        console.log(fn(1, 2));
    } catch (e) {
        console.log("Error (dup params):", e.message);
    }
}

strictDemo();

console.log("\n===========================\n");

// ================
// Function vs Arrow
// ================

function container() {
    "use strict";
    // Regular function: 'this' is undefined in strict
    function regular() {
        console.log("regular (strict):", this);
    }
    regular();

    // Arrow function: inherits 'this' from container, which is undefined
    const arrow = () => {
        console.log("arrow (inherits strict):", this);
    };
    arrow();
}

container();

// Outside any function (non-strict), 'this' is the module.exports ({} in Node)
console.log("Top-level this:", this);

