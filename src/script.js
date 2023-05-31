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
  return data;
}

//Create new product

const createNewProduct = async (product) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  };
  const response = await fetch(backUrl + "/produtos/", requestOptions);
  const data = await response.json();
  console.log(data);
};

//Edit product

const editProductRequest = async (product) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  };
  const response = await fetch(backUrl + "/produtos/", requestOptions);
  const data = await response.json();
  console.log(data);
}

//Delete product

const deleteProductRequest = async (id) => {
  const requestOptions = {
    method: 'DELETE'
  };
  const response = await fetch(backUrl + "/produtos/" + id, requestOptions);
  const data = await response.json();
  console.log(data);
}

console.log('Hello world');

const insertProduct = async () => {
  const productName = document.getElementById("insert-name").value;
  const productPrice = document.getElementById("insert-price").value;

  if (productName && productPrice) {
    await createNewProduct({
      name: productName,
      price: productPrice
    });
    await getAllProducts();
  } else {
    alert("Nome ou preço do produto não foram informados");
  }
};

const editProduct = async () => {
  const productId = document.getElementById("edit-id").value;
  const productName = document.getElementById("edit-name").value;
  const productPrice = document.getElementById("edit-price").value;

  if (productId && productName && productPrice) {
    await editProductRequest({
      id: productId,
      name: productName,
      price: productPrice
    });
    await getAllProducts();
  } else {
    alert("ID, nome ou preço do produto não foram informados");
  }
};

const deleteProduct = async () => {
  const productId = document.getElementById("delete-id").value;

  if (productId) {
    await deleteProductRequest(productId);
    await getAllProducts();
  } else {
    alert("ID não foi informado");
  }
};

const getProductById = async () => {
  const productId = document.getElementById("product-id").value;
  const listParent = document.getElementById("main");

  if (productId) {
    const product = await fetchProductById(productId);

    crateTableDivMain(product);
  } else {
    alert("ID do produto não foi informado");
  }
};

const getAllProducts = async () => {
  const productsList = await fetchAllProducts();

  crateTableDivMain(productsList);
};

const crateTableDivMain = (productsList) => {
  const listParent = document.getElementById("main");
  
  listParent.innerHTML = '';
  var addHtml = document.createElement("table");
  addHtml.setAttribute("class", "table");

  var tableHead = document.createElement("thead");
  addHtml.appendChild(tableHead);

  var tableBody = document.createElement("tbody");
  addHtml.appendChild(tableBody);

  var headerRow = document.createElement("tr");

  var headerId = document.createElement("th");
  headerId.innerHTML = "ID";
  headerRow.appendChild(headerId);

  var headerName = document.createElement("th");
  headerName.innerHTML = "Nome";
  headerRow.appendChild(headerName);

  var headerPrice = document.createElement("th");
  headerPrice.innerHTML = "Preço";
  headerRow.appendChild(headerPrice);

  tableHead.appendChild(headerRow);

  productsList.sort((a, b) => a.id - b.id).forEach(product => {
    var row = document.createElement("tr");

    var newId = document.createElement("th");
    newId.innerHTML = product.id;
    row.appendChild(newId);

    var newName = document.createElement("th");
    newName.innerHTML = product.name;
    row.appendChild(newName);

    var newPrice = document.createElement("th");
    newPrice.innerHTML = product.price;
    row.appendChild(newPrice);

    tableBody.appendChild(row);
  })

  listParent.appendChild(addHtml);
}
