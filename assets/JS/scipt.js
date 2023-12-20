let bottom = document.querySelector('.bottom')

function getAllElement(){
    fetch("http://localhost:3000/data")
    .then(response=>response.json())
    .then(data=> data.forEach(element => { 
        bottom.innerHTML += `

        <div class="bot">
        <a href="#">${element.name}</a>
        <div class="img"><img src="${element.image}" alt=""></div>
        <p>${element.description}</p>
        <button onclick="viewDetails(${element.id})">View Details</button>
        <button onclick="deleteObject(${element.id})">Delete</button>
        <button onclick="updateObject(${element.id})">Update</button>
        <button onclick="Add(${element.id})">Add</button>
    </div>
        `
    })
        )
    }
    
    
    getAllElement()
 
 //---Delete---//
 function deleteObject(id) {
     axios.delete(`http://localhost:3000/data/${id}`);
     window.location.reload()
     
    }
    
    

//  ------Update--------   
function updateObject(id){
    window.location = `./update.html?id=${id} `
}

function Add(id){
    window.location = `./add.html?id=${id} `
}


