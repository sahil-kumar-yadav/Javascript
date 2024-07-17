class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`${this.username} is logged`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    newTeacher(){
        console.log(`${this.username} A new Teacher added `)
    }
}

const teacher = new Teacher("sahil","test@email.com","123")
const newTeacher = new Teacher("sahil","test@email.com","123")

teacher.logMe()
newTeacher.logMe()

console.log(teacher === newTeacher) // return false even if each and every field is same

console.log(teacher instanceof Teacher) //true
console.log(teacher instanceof User) //true