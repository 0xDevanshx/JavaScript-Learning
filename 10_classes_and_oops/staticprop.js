class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){      //A static method is called on the class itself, not on instances (objects) created from the class.
        return `123`
    }
}

console.log(User.createId())    //possible

const devansh = new User("Devansh")
// console.log(devansh.createId());     //fails because devansh is an instance


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher("vivo", "voi@gmail.com")

console.log(Teacher.createId());  // ✅ valid, because Teacher extends User
// console.log(samsung.createId())      //samsung is a instance, so fails


// Think of a class (User) as a factory.
    //A factory might have a method like createId() for generating serial numbers (static).
    //But an individual product (instance) made in the factory doesn't generate IDs — the factory does.