//class based syntax
class User{
    constructor(email, password) {
        this.email = email;         // calls the `set email()` method
        this.password = password    // calls the `set password()` method
    }
    //Why do we write this.password = password; if we use _password?
        // Because this.password = password; is how we trigger the setter, which internally sets the value of this._password.

    // Calling this.email = email → sets this._email = email.
    // Calling this.password = password → sets this._password = password.


    get email(){
        return this._email;
    }
    set email(value){
        this._email = value;
    }
     

    get password(){     //Yoe need to set getter and setter both, if singlular, it error
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}


const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
