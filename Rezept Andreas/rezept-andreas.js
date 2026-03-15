let menge = [75, 125, 1]
let zutat = ['mehl', 'milch', 'eier']
/*let today = new Date();
let formattedDate = today.toLocaleDateString('de-DE');
document.getElementById('date').innerHTML = formattedDate;*/

let hamburgerMenu = document.getElementById("hamburgerMenu");


function startAnzahl() {
    for (let a = 0; a < menge.length; a++) {
        let personen = (document.getElementById("number-of-people").value);
        let basis = menge[a];
        let element = document.getElementById(zutat[a]);
        element.textContent = basis * personen;
    }
}
function anzahl() {
    let personen = Number(document.getElementById("number-of-people").value);

    if (personen >= 1 && personen <= 10){
        
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
anzahl();

function openClose() {
    hamburgerMenu.classList.toggle("noneClass");
}