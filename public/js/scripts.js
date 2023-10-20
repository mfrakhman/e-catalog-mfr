const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// var prevScrollpos = window.scrollY;
// window.onscroll = function () {
//   var currentScrollPos = window.scrollY;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-60px";
//   }
//   prevScrollpos = currentScrollPos;
// };
const rupiah = Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

const createCard = products => {
  return products
    .map(
      product => `
        <div class="product-card">
            <img
                src="${product.image}"
                alt=""
            />
            <div class="product-card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${rupiah.format(product.price)}</p>
            </div>
        </div>`
    )
    .join("");
};

const productList = document.getElementById("product-list");

const getAllProducts = async () => {
  const response = (await fetch("http://localhost:5000/products")).json();
  const products = await response;
  productList.innerHTML = createCard(products);
  console.log(products);
};

getAllProducts();
