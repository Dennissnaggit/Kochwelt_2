let flour = 125;
let dryYeast = 4;
let sugar = 25;
let milk = 60;
let butter = 25;
let brownSugar = 30;
let cinnamon = 2;
let powderedSuga = 50;


function portions() {
    let newValue = document.getElementById("input").value;


    if (newValue < 1 || newValue > 10) {
        document.getElementById("incorrect").innerHTML =
            "Bitte einen Wert zwischen 1 und 10 angeben";
    }

    else {
        document.getElementById("incorrect").innerHTML = "";
    }

    let flourCalc = flour * newValue;
    let dryYeastCalc = dryYeast * newValue;
    let sugarCalc = sugar * newValue;
    let milkCalc = milk * newValue;
    let butterClac = butter * newValue;
    let brownSugarClac = brownSugar * newValue;
    let cinnamonCalc = cinnamon * newValue;
    let powderedSugaCalc = powderedSuga * newValue;

    document.getElementById("flour1").innerHTML = flourCalc;
    document.getElementById("dryYeast2").innerHTML = dryYeastCalc;
    document.getElementById("sugar3").innerHTML = sugarCalc;
    document.getElementById("milk4").innerHTML = milkCalc;
    document.getElementById("butter5").innerHTML = butterClac;
    document.getElementById("brownSugar6").innerHTML = brownSugarClac;
    document.getElementById("cinnamon7").innerHTML = cinnamonCalc;
    document.getElementById("powderedSuga8").innerHTML = powderedSugaCalc;
}

const hamburgerMenu = document.getElementById("hamburgerMenu");

function openClose() {
    hamburgerMenu.classList.toggle("noneClass");
}

function toggleMenu() {
    document.getElementById("resp-menu").classList.toggle('resp-menu-closed');
}