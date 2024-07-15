import { createUser,findUser } from "./db/manageDb.js";
// Select the form elements
const signupForm = document.querySelector('.signup form');
const loginForm = document.querySelector('.login form');

// Add event listeners to the forms for submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from the form fields
    const userName = signupForm.elements['txt'].value;
    const userEmail = signupForm.elements['email'].value;
    const userPhone = signupForm.elements['phone'].value;
    const userPassword = signupForm.elements['pswd'].value;

    createUser(userName, userEmail, userPhone, userPassword);

    // Now you can use these values as needed (e.g., send to server, validate, etc.)
    console.log('Sign up form submitted with values:');
    // console.log('User Name:', userName);
    // console.log('Email:', userEmail);
    // console.log('Phone:', userPhone);
    // console.log('Password:', userPassword);
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get values from the form fields
    // const userEmail = loginForm.elements['email'].value;
    const userName = loginForm.elements['txt'].value;
    const userPassword = loginForm.elements['pswd'].value;
    const isCorrect = findUser(userName,userPassword);

    if(isCorrect){
        console.log("Details are correct")
    }
    else{
        console.log("Details are Incorrect")
    }

    // Now you can use these values as needed (e.g., send to server, validate, etc.)
    // console.log('Login form submitted with values:');
    // console.log('Username:', userName);
    // console.log('Password:', userPassword);
});
