const ingredients = [ 2, 120, 100, 0.5, 0.25, 1, 2 ];
const multiply = document.getElementById("input-dennis");
const newArray = [];

function ingredientsOutput() {
    document.getElementById("incorrect").innerHTML = ""
    if (multiply.value >=1 && multiply.value <=20) {
    newArray.length = 0;
for (const ingredient of ingredients) {
    newArray.push(ingredient * multiply.value);
}
    document.getElementById("value0").innerHTML = newArray[0];
    document.getElementById("value1").innerHTML = newArray[1];
    document.getElementById("value2").innerHTML = newArray[2];
    document.getElementById("value3").innerHTML = newArray[3];
    document.getElementById("value4").innerHTML = newArray[4];
    document.getElementById("value5").innerHTML = newArray[5];
    document.getElementById("value6").innerHTML = newArray[6];
} else {
    document.getElementById("incorrect").innerHTML = "Bitte einen Wert zwischen 1 und 20 angeben"
}
}

