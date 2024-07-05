const button = document.querySelector('button')


const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    // console.log("height ",height)
    // console.log("weight ",weight)
    const result = document.querySelector('#result')
    const h2 = (height * height)/10000
    // console.log("h2 ",h2)
    const bmi = (weight / h2).toFixed(2);
    // console.log("bmi ",bmi)
    if(isNaN(bmi) || bmi == 0){
        alert("Enter a vaild height and weight ");
    }
    if( bmi < 18.6){
        alert("You are Under weight !! ");
    }
    else if(bmi > 24.6){
        alert(" You are OverWeight !! ")
    }
    else{
        alert("You are in normal Range")
    }

    result.innerHTML = bmi
})