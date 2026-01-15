var kérdés = "Van ";
var hozzáad = "még ";
var kérbef = " kérdésed?";
var kiír = kérdés;

function Beszót(){
    kiír += hozzáad;
    document.getElementById("kerdes").innerText = kiír + kérbef;
    document.getElementById("segítség").value = "";
    alert("Köszönjük a visszajelzését!\nA véleménye fontos számunkra.");
}