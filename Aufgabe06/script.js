"use strict";
var aufgabe05;
(function (aufgabe05) {
    let kategorie = "Schafe";
    for (let i = 0; i < aufgabe05.tier.length; i++) {
        if (aufgabe05.tier[i].Kategorie == "Schafe") {
            kategorie = "Schafe";
        }
        else {
            kategorie = "Kühe";
        }
        let newDiv = document.createElement("div");
        newDiv.id = "Artikel" + kategorie + i;
        document.getElementById(kategorie)?.appendChild(newDiv);
        let newName = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.setAttribute("id", "Name" + i);
        newName.innerText = aufgabe05.tier[i].Name;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newName);
        let newpreis = document.createElement("preis");
        newpreis.innerHTML = "€" + aufgabe05.tier[i].preis;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newpreis);
        let newImg = document.createElement("img");
        newImg.src = aufgabe05.tier[i].imgSrc;
        newImg.setAttribute("alt", aufgabe05.tier[i].Name);
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newImg);
        let newBeschreibung = document.createElement("p");
        newBeschreibung.setAttribute("class", "beschreibung");
        newBeschreibung.innerHTML = aufgabe05.tier[i].Beschreibung;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newBeschreibung);
        let newButton = document.createElement("input");
        newButton.value = "Kaufen";
        newButton.type = "button";
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newButton);
        newButton.addEventListener("click", handlerWK);
    }
})(aufgabe05 || (aufgabe05 = {}));
let imWarenkorb = 0;
let gesamtPreis = 0;
let wkZahl = document.createElement("p");
let zählerAnzeige = document.createElement("div");
zählerAnzeige.id = "zählerAnzeige";
function handlerWK(_event) {
    if (imWarenkorb > 0) {
        document.getElementById("Einkaufswagen")?.appendChild(zählerAnzeige);
    }
    imWarenkorb++;
    wkZahl.innerHTML = "" + imWarenkorb;
    document.getElementById("newDiv")?.appendChild(wkZahl);
}
//# sourceMappingURL=script.js.map