let carrots = 150;
let potatoes = 150;
let onions = 0.25;
let butter = 0.25;
let broth = 150;
let sausage = 1;
let oil = 0.25;
let parsley = 0.75;
let cream = 0.5;





function calculate() {
    let neuePortionen = document.getElementById("portions").value;

    if (neuePortionen < 1 || neuePortionen > 10) {
        document.getElementById("incorrect").innerHTML =
            "Bitte einen Wert zwischen 1 und 10 angeben";
    }

    else {
        document.getElementById("incorrect").innerHTML = "";
    }


    let carrotsNew = carrots * neuePortionen;
    let potatoesNew = potatoes * neuePortionen;
    let onionsNew = onions * neuePortionen;
    let butterNew = butter * neuePortionen;
    let brothNew = broth * neuePortionen;
    let sausageNew = sausage * neuePortionen;
    let oilNew = oil * neuePortionen;
    let parsleyNew = parsley * neuePortionen;
    let creamNew = cream * neuePortionen;

    document.getElementById("value1").innerHTML = carrotsNew;
    document.getElementById("value2").innerHTML = potatoesNew;
    document.getElementById("value3").innerHTML = onionsNew;
    document.getElementById("value4").innerHTML = butterNew;
    document.getElementById("value5").innerHTML = brothNew;
    document.getElementById("value6").innerHTML = sausageNew;
    document.getElementById("value7").innerHTML = oilNew;
    document.getElementById("value8").innerHTML = parsleyNew;
    document.getElementById("value9").innerHTML = creamNew;

}