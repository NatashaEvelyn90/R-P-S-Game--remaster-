const verifyAgeSection = document.getElementById("ageIdentifySection");
const correctAge = document.getElementById("ageLimit");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const notCorrectAge = document.getElementById("notEnoughLine");
const retryButton = document.getElementById("retryButton")


// ! First Stage Section
// #region
window.onload = function() {
    notCorrectAge.style.display = 'none';
    retryButton.style.display = 'none'
}

yesButton.addEventListener("click", mainMenu);
function mainMenu() {
    verifyAgeSection.style.display = 'none';
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

