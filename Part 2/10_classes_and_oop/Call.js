function SetUserName(username){

    // complex DB calls
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // current context ko pass kar dena hai
    SetUserName.call(this,username) // refrence hold karvane ky liye 
    this.email = email; 
    this.password = password;
}

const chai = new createUser("chai","chai@fb.com",123);
console.log(chai);