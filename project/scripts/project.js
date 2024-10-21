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

// Games array
const games = [
  {
    gameName: "Ratchet & Clank: Rift Apart",
    platform: "PlayStation",
    released: "June 11, 2021",
    imageUrl: "images/cover-playstation1.webp",
  },
  {
    gameName: "Super Mario Wonder",
    platform: "Nintendo Switch",
    released: "October 20, 2023",
    imageUrl: "images/cover-switch1.webp",
  },
  {
    gameName: "Halo Infinite",
    platform: "Xbox Series X/S",
    released: "December 8, 2021",
    imageUrl: "images/cover-xbox1.webp",
  },
  {
    gameName: "Gran Turismo 7",
    platform: "PlayStation",
    released: "March 4, 2022",
    imageUrl: "images/cover-playstation2.webp",
  },
  {
    gameName: "Mario Kart 8 Deluxe",
    platform: "Nintendo Switch",
    released: "April 27, 2017",
    imageUrl: "images/cover-switch2.webp",
  },
  {
    gameName: "Starfield",
    platform: "Xbox Series X/S",
    released: "September 6, 2023",
    imageUrl: "images/cover-xbox2.webp",
  },
  {
    gameName: "DRAGON BALL: Sparking! ZERO",
    platform: "PlayStation",
    released: "October 7, 2024",
    imageUrl: "images/cover-playstation3.webp",
  },
  {
    gameName: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    released: "March 3, 2017",
    imageUrl: "images/cover-switch3.webp",
  },
  {
    gameName: "NBA 2K24",
    platform: "Xbox Series X/S",
    released: "September 8, 2023",
    imageUrl: "images/cover-xbox3.webp",
  },
  {
    gameName: "Marvel's Spider-Man: Miles Morales",
    platform: "PlayStation",
    released: "November 12, 2020",
    imageUrl: "images/cover-playstation4.webp",
  },
  {
    gameName: "Donkey Kong Country: Tropical Freeze",
    platform: "Nintendo Switch",
    released: "February 13, 2014",
    imageUrl: "images/cover-switch4.webp",
  },
  {
    gameName: "Steelrising",
    platform: "Xbox Series X/S",
    released: "September 8, 2022",
    imageUrl: "images/cover-xbox4.webp",
  },
];

// Create cards loop
createGameCards(games);

// Filters
// Filter Show all games
const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
  playstationLink.classList.remove("selected");
  nintendoLink.classList.remove("selected");
  xboxLink.classList.remove("selected");

  allLink.classList.add("selected");

  createGameCards(games);
});

// Filter Playstation
const playstationLink = document.querySelector("#playstation");
playstationLink.addEventListener("click", () => {
  allLink.classList.remove("selected");
  nintendoLink.classList.remove("selected");
  xboxLink.classList.remove("selected");

  playstationLink.classList.add("selected");

  createGameCards(
    games.filter((game) => game.platform.startsWith("PlayStation"))
  );
});

// Filter Nintendo Switch
const nintendoLink = document.querySelector("#switch");
nintendoLink.addEventListener("click", () => {
  playstationLink.classList.remove("selected");
  xboxLink.classList.remove("selected");
  allLink.classList.remove("selected");

  nintendoLink.classList.add("selected");

  createGameCards(games.filter((game) => game.platform.startsWith("Nintendo")));
});

// Filter Xbox
const xboxLink = document.querySelector("#xbox");
xboxLink.addEventListener("click", () => {
  playstationLink.classList.remove("selected");
  nintendoLink.classList.remove("selected");
  allLink.classList.remove("selected");

  xboxLink.classList.add("selected");

  createGameCards(games.filter((game) => game.platform.startsWith("Xbox")));
});

// Create game cards function
function createGameCards(filteredGames) {
  // Clear the list when applying filters
  document.querySelector(".game-list").innerHTML = "";
  // Loop
  filteredGames.forEach((game) => {
    let card = document.createElement("section");
    let figure = document.createElement("figure");
    let img = document.createElement("img");

    let name = document.createElement("h3");
    let platform = document.createElement("p");
    let released = document.createElement("p");

    name.textContent = game.gameName;
    platform.innerHTML = `${game.platform}`;
    released.innerHTML = `<span class="label">Released on</span> ${game.released}`;
    img.setAttribute("src", game.imageUrl);
    img.setAttribute("alt", `${game.gameName}`);
    img.setAttribute("loading", "lazy");

    card.appendChild(figure);
    figure.appendChild(img);
    card.appendChild(name);
    card.appendChild(platform);
    card.appendChild(released);

    document.querySelector(".game-list").appendChild(card);
  });
}
