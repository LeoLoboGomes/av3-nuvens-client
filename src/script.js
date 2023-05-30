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



//Edit product



//Delete product



console.log('Hello world');

const insertProduct = async () => {
  const productName = document.getElementById("insert-name").value;
  const productPrice = document.getElementById("insert-price").value;

  if (productName && productPrice) {
    
  } else {
    alert("Nome ou preço do produto não foram informados");
  }
};

const editProduct = async () => {
  const productId = document.getElementById("edit-id").value;
  const productName = document.getElementById("edit-name").value;
  const productPrice = document.getElementById("edit-price").value;

  if (productId && productName && productPrice) {
    
  } else {
    alert("ID, nome ou preço do produto não foram informados");
  }
};

const deleteProduct = async () => {
  const productId = document.getElementById("delete-id").value;

  if (productId) {
    
  } else {
    alert("ID não foi informado");
  }
};

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
};

const getAllProducts = async () => {
  console.log('Hello world');
  const listParent = document.getElementById("main");

  const productsList = await fetchAllProducts();

  listParent.innerHTML = '';
  var addHtml = document.createElement('div');
  addHtml.innerHTML = productsList[1].name;
  listParent.appendChild(addHtml);
};
