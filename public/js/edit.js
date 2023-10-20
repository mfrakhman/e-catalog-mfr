const productNameIn = document.getElementById("product-name");
const productDescIn = document.getElementById("product-desc");
const productPriceIn = document.getElementById("product-price");
const productImageIn = document.getElementById("product-image");
const btnEditProduct = document.getElementById("btn-edit-product");

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

const getProductById = async () => {
  const response = await fetch(`http://localhost:5000/products/${id}`);
  const result = await response.json();
  console.log(result);
  const product = result[0];
  productNameIn.value = product.name;
  productDescIn.value = product.description;
  productPriceIn.value = product.price;
  productImageIn.value = product.image;
};

getProductById();

const editProduct = async () => {
  const name = productNameIn.value;
  const description = productDescIn.value;
  const price = productPriceIn.value;
  const image = productImageIn.value;

  const response = await fetch(`http://localhost:5000/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ name, description, price, image }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (result) {
    window.location.replace("admin.html");
  }
};

const handleSubmit = async e => {
  e.preventDefault();
  editProduct();
};

btnEditProduct.addEventListener("click", handleSubmit);
