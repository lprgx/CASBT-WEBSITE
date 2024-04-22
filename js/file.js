/*Agrandissement de la navbar au scroll*/

var navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0 && window.scrollY >= navbar.offsetHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/******************************************************************************************************** */

/*Ajout d'accueil dans la navbar quand l'écran rétrécit + toggle menu-hamburger active*/

const hamburgerButton = document.querySelector(".btnBurger");
let accueilCreated = false;

function toggleNav() {
  if (document.body.style.overflowY == "hidden") {
    document.body.style.overflowY = "visible";
  } else {
    document.body.style.overflowY = "hidden";
  }
  hamburgerButton.classList.toggle("active");
  navbar.classList.toggle("active");

  if (!accueilCreated) {
    let accueil = document.createElement("li");
    accueil.id = "accueil";
    let a = document.createElement("a");
    a.textContent = "Accueil";
    a.href = "index.html";
    let ul = navbar.querySelector("ul");
    accueil.appendChild(a);
    //ul.appendChild(accueil);
    ul.prepend(accueil);
    // Mise à jour de l'état de l'input
    accueilCreated = true;
  }
}

hamburgerButton.addEventListener("click", toggleNav);

/******************************************************************************************************** */

/*Suppression d'accueil dans la navbar quand l'écran s'agrandit*/
window.addEventListener("resize", function () {
  // Vérification de la taille de la page
  let width = window.innerWidth;
  // Si la taille de la page atteint le niveau souhaité
  if (width > 950) {
    // Suppression de l'élément
    document.getElementById("accueil").remove();
    accueilCreated = false;
  }
});

/******************************************************************************************************** */

/*Thème sombre / thème clair*/
const themeBtn = document.querySelector(".theme-btn");
const icon = themeBtn.querySelector("i");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (icon.classList.contains("bi-brightness-high-fill")) {
    icon.classList.remove("bi-brightness-high-fill");
    icon.classList.add("bi-moon-fill");
  } else {
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-brightness-high-fill");
  }
});

/******************************************************************************************************** */
/*Activation toggle SearchBar sur la navbar*/
const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector("#magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

/******************************************************************************************************** */

/*Jeu d'affichage dans Elu*/
const greeting = ["Les Élus CASBT", "vous souhaitent", "la Bienvenue !"];
let currentGreetingIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;
let isPaused = false;
let pauseEnd = 0;

function typeWriterEffect() {
  const greetingElement = document.getElementById("titre");

  if (isPaused && Date.now() > pauseEnd) {
    isPaused = false;
    if (isDeleting) {
      currentGreetingIndex = (currentGreetingIndex + 1) % greeting.length;
      isDeleting = false;
    } else {
      isDeleting = true;
    }
  }

  if (
    !isPaused &&
    !isDeleting &&
    currentCharacterIndex === greeting[currentGreetingIndex].length
  ) {
    isPaused = true;
    pauseEnd = Date.now() + 800;
    return setTimeout(typeWriterEffect, 50);
  }

  if (!isPaused && isDeleting && currentCharacterIndex === 0) {
    isPaused = true;
    pauseEnd = Date.now() + 200;
    return setTimeout(typeWriterEffect, 50);
  }

  const timeout = isDeleting ? 100 : 200;
  greetingElement.innerText = greeting[currentGreetingIndex].substring(
    0,
    currentCharacterIndex
  );
  currentCharacterIndex = isDeleting
    ? currentCharacterIndex - 1
    : currentCharacterIndex + 1;
  setTimeout(typeWriterEffect, timeout);
}

typeWriterEffect();


function openDescription() {
  // Affiche la page de description
  document.getElementById("informations").style.display = "block";
}



function fermerDescription() {
  // Ferme la page de description
  document.getElementById("informations").style.display = "none";
}