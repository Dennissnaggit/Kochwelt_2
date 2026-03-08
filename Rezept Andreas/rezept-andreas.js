let menge = [500, 2, 5]
let zutat = ['spagetti', 'tomaten', 'knoblauch']
let today = new Date();
let formattedDate = today.toLocaleDateString('de-DE');
document.getElementById('date').innerHTML = formattedDate;

function anzahl() {
    for (let a = 0; a < menge.length; a++) {
        let personen = (document.getElementById("number-of-people").value);
        let basis = menge[a];
        let element = document.getElementById(zutat[a]);
        element.textContent = basis * personen;
    }
}
anzahl();

