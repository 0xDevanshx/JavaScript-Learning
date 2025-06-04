//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();           //semicolon must in it, else error (if we call another iife)

(  (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh'); 