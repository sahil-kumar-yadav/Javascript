class User{
    constructor(email,password){
        this.email =  email;
        this.password = password
    }

    // getter setter sath my atte hai
    // name same rakhna padega

    set password(value){
        this._password = value
    }
    
    get password(){
        return `${this._password.toUpperCase()}SAHIL`
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(val){
        this._email = val
    }

}

const sahil = new User("Sahil@newMail.ai","avc")
console.log(sahil.email)
console.log(sahil.password)




