const hamburgerMenu = document.getElementById("hamburgerMenu");
const ingredients = [2, 120, 100, 0.5, 0.25, 1, 2];
const multiply = document.getElementById("input-dennis");
const newArray = [];

function ingredientsOutput() {
  document.getElementById("incorrect").innerHTML = "";
  if (multiply.value >= 1 && multiply.value <= 20) {
    newArray.length = 0;
    for (let i = 0; i <= ingredients.length; i++) {
      let ingredient = ingredients[i];
      newArray.push(ingredient * multiply.value);
    }
    document.getElementById("garlic").innerHTML = newArray[0];
    document.getElementById("mayo").innerHTML = newArray[1];
    document.getElementById("quark").innerHTML = newArray[2];
    document.getElementById("salt").innerHTML = newArray[3];
    document.getElementById("sugar").innerHTML = newArray[4];
    document.getElementById("sauce").innerHTML = newArray[5];
    document.getElementById("tabasco").innerHTML = newArray[6];
  } else {
    document.getElementById("incorrect").innerHTML =
      "Bitte einen Wert zwischen 1 und 20 angeben";
  }
}

function openClose() {
  hamburgerMenu.classList.toggle("noneClass");
}

function toggleMenu() {
  document.getElementById("resp-menu").classList.toggle("resp-menu-closed");
}
