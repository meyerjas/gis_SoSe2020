"use strict";
var aufgabe06;
(function (aufgabe06) {
    let kategorie = "Schafe";
    let gesamtPreis = 0;
    document.getElementById("Schäflein")?.addEventListener("click", handlerBeGone);
    document.getElementById("Kühlein")?.addEventListener("click", handlerBeGone);
    document.getElementById("tierliebe")?.addEventListener("click", handlerBeGone);
    for (let i = 0; i < aufgabe06.tier.length; i++) {
        if (aufgabe06.tier[i].Kategorie == "Schafe") {
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
        newName.innerText = aufgabe06.tier[i].Name;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newName);
        let newpreis = document.createElement("preis");
        newpreis.innerHTML = "€" + aufgabe06.tier[i].preis;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newpreis);
        let newImg = document.createElement("img");
        newImg.src = aufgabe06.tier[i].imgSrc;
        newImg.setAttribute("alt", aufgabe06.tier[i].Name);
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newImg);
        let newBeschreibung = document.createElement("p");
        newBeschreibung.setAttribute("class", "beschreibung");
        newBeschreibung.innerHTML = aufgabe06.tier[i].Beschreibung;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newBeschreibung);
        let newButton = document.createElement("input");
        newButton.value = "Kaufen";
        newButton.type = "button";
        newButton.setAttribute("artikelIndex", i.toString());
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newButton);
        newButton.addEventListener("click", handlerWK);
    }
    let imWarenkorb = 0;
    let zählerAnzeige = document.createElement("div");
    zählerAnzeige.id = "zählerAnzeige";
    document.getElementById("Einkaufswagen")?.appendChild(zählerAnzeige);
    zählerAnzeige.innerHTML = imWarenkorb.toString();
    if (imWarenkorb == 0) {
        zählerAnzeige.style.display = "none";
    }
    else
        zählerAnzeige.style.display = "block";
    function handlerWK(_event) {
        let target = _event.target;
        let artikelIndex = parseInt(target.getAttribute("artikelIndex"));
        zählerAnzeige.style.display = "block";
        imWarenkorb++;
        zählerAnzeige.innerHTML = "" + imWarenkorb;
        gesamtPreis = aufgabe06.tier[artikelIndex].preis + gesamtPreis;
        console.log("Gesamtpreis:" + gesamtPreis + "€");
    }
    function handlerBeGone(_event) {
        let target = _event.target;
        let kategorie = target.getAttribute("href");
        if (kategorie == "#schafe") {
            document.getElementById("Kühe")?.setAttribute("style", "display : none");
            document.getElementById("Schafe")?.setAttribute("style", "display : flex");
        }
        else if (kategorie == "#kühe") {
            document.getElementById("Schafe")?.setAttribute("style", "display : none");
            document.getElementById("Kühe")?.setAttribute("style", "display : flex");
        }
        else {
            document.getElementById("Schafe")?.setAttribute("style", "display : flex");
            document.getElementById("Kühe")?.setAttribute("style", "display : flex");
        }
    }
})(aufgabe06 || (aufgabe06 = {}));
//# sourceMappingURL=script.js.map