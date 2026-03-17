let menge = [75, 125, 1]
let zutat = ['mehl', 'milch', 'eier']


let hamburgerMenu = document.getElementById("hamburgerMenu");
function init() {
    anzahl();
}


function anzahl() {
    let personen = Number(document.getElementById("number-of-people").value);

    if (personen >= 1 && personen <= 10){
        document.getElementById("wrongValue").innerHTML = "";
        for (let a = 0; a < menge.length; a++) {
            let basis = menge[a];
            let element = document.getElementById(zutat[a]);
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