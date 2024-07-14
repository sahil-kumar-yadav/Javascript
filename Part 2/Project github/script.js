// https://api.github.com/users/sahil-kumar-yadav


const input = document.querySelector("#username-input")
const fetctButton = document.querySelector("#fetch-btn")
const FullName = document.querySelector("#name")
const GitUsername = document.querySelector("#username")
const GitAvatar = document.querySelector("#avatar")
const Gitrepos = document.querySelector("#repositories")
const Gitfollowers = document.querySelector("#followers")
const Gitfollowing = document.querySelector("#following")
const GitBio = document.querySelector("#bio")
const image = document.querySelector("img")



let username;
let data;
const getData = function (){
    username = input.value;
    // console.log(username);
    fetchdata(username);
}

const fetchdata = function(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(function(response){
        return response.json();
    })
    .then(function(info){

        // console.log(info)
        data = info;
        console.log(data);
        FullName.innerHTML = data.name;
        GitUsername.innerHTML = data.login;
        Gitrepos.innerHTML =  data.public_repos;
        Gitfollowers.innerHTML =  data.followers;
        Gitfollowing.innerHTML =  data.following;
        // image.removeAttribute("src");
        image.setAttribute("src",data.avatar_url)
        // GitAvatar.setAttribute("id","clss");
        GitBio.innerHTML = data.bio;

    })
    .catch(function(error){
        console.log("E: ",error);
    })

}



fetctButton.addEventListener('click',getData)