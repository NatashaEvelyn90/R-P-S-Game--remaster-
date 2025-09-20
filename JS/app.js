const verifyAgeSection = document.getElementById("ageIdentifySection");
const correctAge = document.getElementById("ageLimit");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const notCorrectAge = document.getElementById("notEnoughLine");
const retryButton = document.getElementById("retryButton")

//*Main Sections 
const gameStartSection = document.getElementById("gameStartMenu");

//? Images
const flowerBg = document.getElementById("flowerMenu");
const announceBg = document.getElementById("announcementMenu");
const sparkleBg = document.getElementById("sparkleBg");
const spaceBg = document.getElementById("battleImage");
const gameOverBg = document.getElementById("gameOverMenu");

//? Main Game Menu
const startBtn = document.getElementById("startBtn");
const tutorialBtn = document.getElementById("tutorialBtn")
const credisBtn = document.getElementById("creditsBtn")
const movieBarTop = document.getElementById("movieBarTop");
const movieBarBottom = document.getElementById("movieBarBottom");

//? Characters
const toxtillCharacter = document.getElementById("toxtillImage");
const crazpiccCharacter = document.getElementById("crazpiccImage");
const mannyCharacter = document.getElementById("mannyImage"); 

//TODO Music  

// ! First Stage Section
// #region
window.onload = function() {
    notCorrectAge.style.display = 'none';
    retryButton.style.display = 'none'
}

yesButton.addEventListener("click", mainMenu);
function mainMenu() {
    verifyAgeSection.style.display = 'none';
    gameStartSection.removeAttribute("hidden");
}

noButton.addEventListener("click", ohWell);
function ohWell() {
    correctAge.style.display = 'none';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    notCorrectAge.style.display = 'block';
    retryButton.style.display = 'block';
}

retryButton.addEventListener("click", restart);
function restart() {
    window.location.reload();
}
// #endregion

//! Clicking "START" Section
startBtn.addEventListener("click", beginGame);
function beginGame() {
    movieBarTop.removeAttribute("hidden");
    movieBarBottom.removeAttribute("hidden");
    gameStartSection.classList.add("fadeOut");
    flowerBg.classList.add("fadeOut");
    sparkleBg.classList.add("fadeOut");
    toxtillCharacter.removeAttribute("hidden");

}
