const jokeCont =  document.getElementById("joke");
const btn =  document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,sexist,explicit&type=single"

let getJoke=()=>{
    jokeCont.classList.remove("fade");
    fetch(url)
    .then (data => data.json())
    .then (item =>{
        jokeCont.textContent = `${item.joke}`;
        jokeCont.classList.add("fade");
    });


}
btn.addEventListener("click",getJoke);
getJoke();