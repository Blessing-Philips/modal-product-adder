let products = [];

let save = document.getElementById("saveButton")
save.addEventListener("click", function(event) {
    event.preventDefault() //prevents the form from reloading the page
    let productName = document.getElementById("name")
    let productPrice = document.getElementById("price")
    let productImage = document.getElementById("image")

// This get just the first image that the user selected
const imagE = productImage.files[0]
//FileReader reads a file directly from the computer. "new" creates a new instance for file       reader
const reader = new FileReader()
//onload allows "reader" to read the inputs. result gegts the resuls....
reader.onload = function(event){
    
    let newProducts = {
        name : productName.value,
        price : productPrice.value,
        image : event.target.result,
    }
    products.push(newProducts);
    
    updateProductGrid();
}
    reader.readAsDataURL(imagE)
    console.log(products)
}
) 

updateProductGrid = ()=>{
    let theCardContainer = document.querySelector(".card__container")
    products.forEach((product) => {
        const eachCard = document.createElement("div")
        eachCard.className = "col-12 col-md-4 col-lg-3 mb-5"
        eachCard.innerHTML = `
            <div class="card m-5">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text"> 
                    ${product.name}
                </p>
                <p class="card-text">
                    ${product.price}
                </p>
                
                </div>
            </div>`
        theCardContainer.appendChild(eachCard)

    });
}