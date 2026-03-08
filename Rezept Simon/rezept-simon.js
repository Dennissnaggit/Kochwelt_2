    let möhren = 150;
    let kartoffeln = 150;
    let zwiebeln = 0.25;
    let butter = 0.25;
    let brühe = 150;
    let wurst = 1;
    let öl = 0.25;
    let petersilie = 0.75;
    let sahne = 0.5;


    
    

function calculate() {
    let neuePortionen = document.getElementById("portions").value;

    if (neuePortionen < 1 || neuePortionen > 10) {
        alert("Bitte geben Sie eine Zahl zwischen 1 und 10 ein.");
        return;
    }
    
    let möhrenNeu = möhren * neuePortionen;
    let kartoffelnNeu = kartoffeln * neuePortionen;
    let zwiebelnNeu = zwiebeln * neuePortionen;
    let butterNeu = butter * neuePortionen;
    let brüheNeu = brühe * neuePortionen;
    let wurstNeu = wurst * neuePortionen;
    let ölNeu = öl * neuePortionen;
    let petersilieNeu = petersilie * neuePortionen;
    let sahneNeu = sahne * neuePortionen;

    document.getElementById("value1").innerHTML = möhrenNeu;
    document.getElementById("value2").innerHTML = kartoffelnNeu;
    document.getElementById("value3").innerHTML = zwiebelnNeu;
    document.getElementById("value4").innerHTML = butterNeu;
    document.getElementById("value5").innerHTML = brüheNeu;
    document.getElementById("value6").innerHTML = wurstNeu;
    document.getElementById("value7").innerHTML = ölNeu;
    document.getElementById("value8").innerHTML = petersilieNeu;
    document.getElementById("value9").innerHTML = sahneNeu;

}