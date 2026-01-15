var kérdés = "Van ";
var hozzáad = "még ";
var kérbef = " kérdésed?";
var kiír = kérdés;
var hanyszor = 0;


function Beszót(){
    kiír += hozzáad;
    hanyszor++;
    if (hanyszor < 10) {
        document.getElementById("kerdes").innerText = kiír + kérbef;
        document.getElementById("segítség").value = "";
        alert("Köszönjük a visszajelzését!\nA véleménye fontos számunkra.");
    }
    else if (hanyszor < 15) {
        document.getElementById("kerdes").innerText = "Mi bajod van ember?!?";
        document.getElementById("segítség").value = "";
    }
    else {
        document.getElementById("kerdes").innerText = "Kész! Betelt a pohár!\n :( \nElveszem az idegesítő kis játékodat!\nTényleg idáig kellett jutni?!?";
        document.getElementById("segítség").style.display = "none";
        document.getElementById("kuld").style.display = "none";
    }
}