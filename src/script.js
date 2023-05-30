const backUrl = "http://localhost:3000"

//Get all products

const fetchAllProducts = async () => {
  const response = await fetch(backUrl + "/produtos/");
  const data = await response.json();
  return data;
}

//Get specific product by ID

const fetchProductById = async (id) => {
  const response = await fetch(backUrl + "/produtos/" + id);
  const data = await response.json();
  return data[0];
}


//Create new product


//Change product

//Delete product
console.log('Hello world')

const mockProducts = ["Product one", "Product two", "Product three"]

const getProductById = async () => {
  const productId = document.getElementById("product-id").value;
  const listParent = document.getElementById("main");

  if (productId) {
    const product = await fetchProductById(productId);

    listParent.innerHTML = '';
    var addHtml = document.createElement('div');
    addHtml.innerHTML = product.name;
    listParent.appendChild(addHtml);
  } else {
    alert("ID do produto não foi informado");
  }
}

const getAllProducts = async () => {
  console.log('Hello world');
  const listParent = document.getElementById("main");

  const productsList = await fetchAllProducts();

  listParent.innerHTML = '';
  var addHtml = document.createElement('div');
  addHtml.innerHTML = productsList[1].name;
  listParent.appendChild(addHtml);
}