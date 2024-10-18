// Date related in the footer
const today = new Date();
currentyear.innerHTML = `<span class="currentyear">© ${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

// Get array
createProductList(products);

const productlist = document.querySelector("#productname");

function createProductList(products) {
  console.log(products.name);
  let productlist = document.createElement("p");

  products.forEach((product) => {});
}

function createProductList(products) {
  // Loop
  products.forEach((product) => {
    let option = document.createElement("option");

    option.innerHTML = `${product.name}`;

    document.querySelector("#productname").appendChild(option);
  });
}
