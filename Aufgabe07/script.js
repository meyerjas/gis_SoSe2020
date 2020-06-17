"use strict";
var aufgabe07;
(function (aufgabe07) {
    let gesamtPreis = 0;
    document.getElementById("Schäflein")?.addEventListener("click", handlerBeGone);
    document.getElementById("Kühlein")?.addEventListener("click", handlerBeGone);
    document.getElementById("tierliebe")?.addEventListener("click", handlerBeGone);
    reinMitEuch();
    async function loadProducts(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        aufgabe07.artikel = JSON.parse(JSON.stringify(jsonArray));
        console.log("test");
    }
    async function reinMitEuch() {
        let kategorie;
        await loadProducts("array.json");
        console.log("bitte helfen Sie mir.");
        for (let i = 0; i < aufgabe07.tier.length; i++) {
            if (aufgabe07.tier[i].Kategorie == "Schafe") {
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
            newName.innerText = aufgabe07.tier[i].Name;
            document.getElementById("Artikel" + kategorie + i)?.appendChild(newName);
            let newpreis = document.createElement("preis");
            newpreis.innerHTML = "€" + aufgabe07.tier[i].preis;
            document.getElementById("Artikel" + kategorie + i)?.appendChild(newpreis);
            let newImg = document.createElement("img");
            newImg.src = aufgabe07.tier[i].imgSrc;
            newImg.setAttribute("alt", aufgabe07.tier[i].Name);
            document.getElementById("Artikel" + kategorie + i)?.appendChild(newImg);
            let newBeschreibung = document.createElement("p");
            newBeschreibung.setAttribute("class", "beschreibung");
            newBeschreibung.innerHTML = aufgabe07.tier[i].Beschreibung;
            document.getElementById("Artikel" + kategorie + i)?.appendChild(newBeschreibung);
            let newButton = document.createElement("input");
            newButton.value = "Kaufen";
            newButton.type = "button";
            newButton.setAttribute("artikelIndex", i.toString());
            document.getElementById("Artikel" + kategorie + i)?.appendChild(newButton);
            newButton.addEventListener("click", handlerWK);
        }
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
        gesamtPreis = aufgabe07.tier[artikelIndex].preis + gesamtPreis;
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
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=script.js.map