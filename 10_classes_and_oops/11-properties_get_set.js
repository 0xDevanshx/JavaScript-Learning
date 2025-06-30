//function based syntax

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            // this.email = value;     //would gives error
                // Because:
                    // this.email = value; → triggers the setter
                    // The setter runs → calls this.email = value; again → and it keeps going forever
            this._email = value;        //corrected


        }
    })

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value;
        }
    })

}


const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

hitesh.email = "test@error.com";    // Triggers the setter(now we corrected it)
