const buttons = document.querySelectorAll('.btn')
// document.body.style.backgroundColor = "green"
buttons.forEach(function (item) {
    const id = item.id
    // console.log(item)
    document.querySelector(`#${id}`).style.backgroundColor = id;
    item.addEventListener('click', function (e) {
        // console.log(e) //
        // console.log(e.target) // pura div de deta hai 
        // console.log(e.target.id) // id de dega
        document.body.style.backgroundColor = e.target.id;
    })
})

// console.log(button)

// document.querySelector('body').style.backgroundColor = "whitesmoke"
