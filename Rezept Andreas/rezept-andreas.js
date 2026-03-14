let menge = [75, 125, 1]
let zutat = ['mehl', 'milch', 'eier']
/*let today = new Date();
let formattedDate = today.toLocaleDateString('de-DE');
document.getElementById('date').innerHTML = formattedDate;*/

let hamburgerMenu = document.getElementById("hamburgerMenu");

function anzahl() {
    for (let a = 0; a < menge.length; a++) {
        let personen = (document.getElementById("number-of-people").value);
        let basis = menge[a];
        let element = document.getElementById(zutat[a]);
        element.textContent = basis * personen;
    }
}
anzahl();

function openClose() {
    hamburgerMenu.classList.toggle("noneClass");
}