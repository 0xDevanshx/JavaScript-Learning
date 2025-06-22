//Object based syntax

const User = {
    _email: 'h@hdc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
} 

const tea = Object.create(User)
console.log(tea.email);     // This looks like a property, but it's actually calling get email()
tea.email = "new@mail.com";
//Under The hood
// User.get email() // and
// User.set email(value)

console.log(tea.email); // "NEW@MAIL.COM"
