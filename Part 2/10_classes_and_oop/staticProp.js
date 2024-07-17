// prop --> properties

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`${this.username} is loggedIn`)
    }
    static createId(){ // har kisi ko ye method nahi dena chate
        return `123`
    }
}

const user1 = new User("sahil")

// console.log(user1.createId()) // error becuz method is static

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const teacher = new Teacher("teacher","teac@edu.in")
console.log(teacher);
console.log(teacher.logMe());
// console.log(teacher.createId()); // error