let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("#form");
let file = document.querySelector("input[type=file]");
let name = document.querySelector("#name");
let desc = document.querySelector("#desc");
let image = document.querySelector("#image");

fetch(`http://localhost:3000/data/${id}`)
.then(res => res.json())
.then(data => {
    name.value = data.name;
    desc.value = data.description;
    image.src = data.image
})

file.addEventListener("input", (e)=>{
    let file = e.target.files[0];
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            image.src = reader.result
        }
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {
        name: name.value,
        image: image.src,
        description: desc.value
    }
    axios.patch(`http://localhost:3000/data/${id}`, obj)
    .then(() => {
        window.location = "./index.html"
    })
})