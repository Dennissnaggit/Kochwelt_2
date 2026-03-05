let menge = [500, 2, 5]
let zutat = ['spagetti', 'tomaten', 'knoblauch']



function anzahl() {
    for (let a = 0; a < menge.length; a++) {
        let personen = (document.getElementById("anzahl-personen").value);
        let basis = menge[a];
        let element = document.getElementById(zutat[a]);
        element.textContent = basis * personen;
    }
}
anzahl();