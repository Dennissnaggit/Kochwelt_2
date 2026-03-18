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
    let newPortions = document.getElementById("portions").value;

    if (newPortions < 1 || newPortions > 10) {
        document.getElementById("incorrect").innerHTML =
            "Bitte einen Wert zwischen 1 und 10 angeben";
    }

    else {
        document.getElementById("incorrect").innerHTML = "";
    }


    let carrotsNew = carrots * newPortions;
    let potatoesNew = potatoes * newPortions;
    let onionsNew = onions * newPortions;
    let butterNew = butter * newPortions;
    let brothNew = broth * newPortions;
    let sausageNew = sausage * newPortions;
    let oilNew = oil * newPortions;
    let parsleyNew = parsley * newPortions;
    let creamNew = cream * newPortions;

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