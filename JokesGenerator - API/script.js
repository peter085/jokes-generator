const btn = document.getElementById("jokeBtn")


btn.addEventListener('click' , () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((res) => {
        if(res.ok){
            return res.json()
        }
        else return alert("error occrued")
    })
    .then((item) => { 
        const text = document.getElementById("joke")
     text.innerText = item.joke}
    )
})

