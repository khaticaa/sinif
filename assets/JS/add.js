let form = document.querySelector("#form");
let file = document.querySelector("input[type=file]");
let name = document.querySelector("#name");
let description = document.querySelector("#description");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {};
    let reader =  new FileReader();
    let src = file.files[0];

    reader.onload = (e)=>{
        obj = {
            name: name.value,
            image: e.target.result,
            description: description.value
        }
        axios.post("http://localhost:3000/data", obj)
        .then(res => {
            window.location = "./index.html"
        })
    }
    reader.readAsDataURL(src)
})