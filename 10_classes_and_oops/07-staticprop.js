class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static showId(){      //A static method is called on the class itself, not on instances (objects) showd from the class.
        //simply means, ONLY class itself can use it, BUT not its any of instance
        return `123`
    }
}

console.log(User.showId())    //possible

const devansh = new User("Devansh")
// console.log(devansh.showId());     //fails because devansh is an instance


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher("vivo", "voi@gmail.com")

console.log(Teacher.showId());  // ✅ valid, because Teacher extends User
// console.log(samsung.showId())      //samsung is a instance, so fails


// Think of a class (User) as a factory.
    //A factory might have a method like showId() for generating serial numbers (static).
    //But an individual product (instance) made in the factory doesn't generate IDs — the factory does.