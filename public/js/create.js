const productNameIn = document.getElementById("product-name");
const productDescIn = document.getElementById("product-desc");
const productPriceIn = document.getElementById("product-price");
const productImageIn = document.getElementById("product-image");
const btnCreateProduct = document.getElementById("btn-create-product");

const createProduct = async () => {
  const name = productNameIn.value;
  const description = productDescIn.value;
  const price = productPriceIn.value;
  const image = productImageIn.value;

  const response = await fetch(`http://localhost:5000/products`, {
    method: "POST",
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
  createProduct();
};

btnCreateProduct.addEventListener("click", handleSubmit);
