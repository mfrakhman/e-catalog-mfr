const logOut = document.getElementById("log-out");
const tableProducts = document.getElementById("table-content");
const editProductBtn = document.getElementById("edit-product");
const deleteProductBtn = document.getElementById("delete-product");

function removeCookie(name) {
  document.cookie =
    name + "=" + ";" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;" + "path=/";
}

logOut.addEventListener("click", () => {
  removeCookie("username");
  window.location.href = "index.html";
});

const getAllProducts = async () => {
  const response = (await fetch("http://localhost:5000/products")).json();
  const products = await response;
  console.log(products);
  products.forEach(product => {
    tableProducts.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.description}</td>
      <td class="table-content-image"><img src="${product.image}"/></td>
      <td>
      <a href="edit.html?id=${product.id}" type="button" id="edit-product">EDIT</a>
      <button onclick="deleteProduct(${product.id})" type="button" id="delete-product">DELETE</button>
      </td>
    </tr>`
    );
  });
};

const deleteProduct = async id => {
  const response = await fetch(`http://localhost:5000/products/${id}`, {
    method: "DELETE",
  });
  const result = await response.ok;
  if (result) {
    window.location.reload();
  }
};

getAllProducts();
