let mehl = 125;
let trockenhefe = 4;
let zucker = 25;
let milch = 60;
let butter = 25;
let braunerZucker = 30;
let zimt = 2;
let puderzucker = 50;


function portions() {
    let newValue = document.getElementById("input").value;

    if (newValue < 1 || newValue > 10) {
        alert("Bitte gib eine Zahl von 1 bis 10 ein.");
        return;
    }

    let mehlcalc = mehl * newValue;
    let trockenhefecalc = trockenhefe * newValue;
    let zuckercalc = zucker * newValue;
    let milchcalc = milch * newValue;
    let butterclac = butter * newValue;
    let braunerZuckercalc = braunerZucker * newValue;
    let zimtcalc = zimt * newValue;
    let puderzuckercalc = puderzucker * newValue;

    document.getElementById("value-1").innerHTML = mehlcalc;
    document.getElementById("value-2").innerHTML = trockenhefecalc;
    document.getElementById("value-3").innerHTML = zuckercalc;
    document.getElementById("value-4").innerHTML = milchcalc;
    document.getElementById("value-5").innerHTML = butterclac;
    document.getElementById("value-6").innerHTML = braunerZuckercalc;
    document.getElementById("value-7").innerHTML = zimtcalc;
    document.getElementById("value-8").innerHTML = puderzuckercalc;
}

const hamburgerMenu = document.getElementById("hamburgerMenu");

function openClose() {
    hamburgerMenu.classList.toggle("noneClass");
}

function toggleMenu() {
    document.getElementById("resp-menu").classList.toggle('resp-menu-closed');
}