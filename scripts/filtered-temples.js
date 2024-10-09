// Date related in the footer
const today = new Date();
currentyear.innerHTML = `<span class="currentyear">© ${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

// Hamburguer menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("close");
});

// Temples array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/400x250/curitiba-brazil-temple-lds-852263-wallpaper.jpg",
  },
  {
    templeName: "Manhattan New York",
    location: "New York City, United States",
    dedicated: "2004, June, 13",
    area: 20630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manhattan-new-york/400x250/manhattan-temple-lds-248728-wallpaper.jpg",
  },
  {
    templeName: "Manaus Brazil",
    location: "Manaus, Brazil",
    dedicated: "2012, June, 10",
    area: 32032,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/manaus-brazil-temple-lds-1041548-wallpaper.jpg",
  },
];

// Create cards loop
createTempleCards(temples);

// Filters
// Filter Home - Show all temples
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  createTempleCards(temples);
});

// Filter Old - temples built before 1900
const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  createTempleCards(
    temples.filter((temple) => temple.dedicated.startsWith("18"))
  );
});

// Filter New - temples built after 2000
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  createTempleCards(
    temples.filter((temple) => temple.dedicated.startsWith("2"))
  );
});

// Filter Large - temples larger than 90000 square feet
const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  createTempleCards(temples.filter((temple) => temple.area > 90000));
});

// Filter Small - temples smaller than 10000 square feet
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  createTempleCards(temples.filter((temple) => temple.area < 10000));
});

// Filter Non Utah - Test filter
// const nonUtahLink = document.querySelector("#nonutah");

// nonUtahLink.addEventListener("click", () => {
//   createTempleCards(
//     temples.filter((temple) => !temple.location.includes("Utah"))
//   );
// });

// Create temple cards function
function createTempleCards(filteredTemples) {
  // Clear the list when applying filters
  document.querySelector(".temple-list").innerHTML = "";
  // Loop
  filteredTemples.forEach((temple) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);

    document.querySelector(".temple-list").appendChild(card);
  });
}
