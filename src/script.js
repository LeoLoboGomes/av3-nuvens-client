//Get all products


//Get especific product by ID

const fetchProductById = (id) => {
  console.log(id)
  fetch('./api/some.json')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data);
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
}


//Create new product


//Change product

//Delete product
console.log('Hello world')

const mockProducts = ["Product one", "Product two", "Product three"]

const getProductById = () => {
  const productId = document.getElementById("product-id").value
  const listParent = document.getElementById("main")

  if (productId) {
    fetchProductById(productId)
    listParent.innerHTML = ''
    var addHtml = document.createElement('div')
    addHtml.innerHTML = mockProducts[productId]
    listParent.appendChild(addHtml)
  } else {
    alert("ID do produto não foi informado")
  }
}

const getAllProducts = () => {
  console.log('Hello world')
  const listParent = document.getElementById("main")

  listParent.innerHTML = ''
  var addHtml = document.createElement('div')
  addHtml.innerHTML = mockProducts
  listParent.appendChild(addHtml)
}