let crowd = [75, 125, 1]
let ingredient = ['mehl', 'milch', 'eier']


let hamburgerMenu = document.getElementById("hamburgerMenu");
function init() {
    anzahl();
}


function anzahl() {
    let personen = Number(document.getElementById("number-of-people").value);

    if (personen >= 1 && personen <= 10){
        document.getElementById("wrongValue").innerHTML = "";
        for (let a = 0; a < crowd.length; a++) {
            let basis = crowd[a];
            let element = document.getElementById(ingredient[a]);
            element.textContent = basis * personen;
        }
    }
    else{
        document.getElementById("wrongValue").innerHTML = "Bitte einen Wert zwischen 1 und 10 angeben";
    }
}


function openClose() {
    hamburgerMenu.classList.toggle("noneClass");
}