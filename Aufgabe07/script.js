"use strict";
var aufgabe07;
(function (aufgabe07) {
    localStorage.clear();
    let gesamtPreis = 0;
    document.getElementById("Schäflein")?.addEventListener("click", handlerBeGone);
    document.getElementById("Kühlein")?.addEventListener("click", handlerBeGone);
    document.getElementById("tierliebe")?.addEventListener("click", handlerBeGone);
    reinMitEuch();
    async function loadProducts(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        aufgabe07.tier = JSON.parse(JSON.stringify(jsonArray));
        console.log("test");
    }
    async function reinMitEuch() {
        let kategorie;
        await loadProducts("array.json");
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
            newDiv.setAttribute("zähler", i.toString());
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
    let j = 0;
    document.getElementById("Einkaufswagen")?.appendChild(zählerAnzeige);
    function handlerWK(_event) {
        imWarenkorb++;
        let target = _event.target;
        let artikelIndex = parseInt(target.getAttribute("artikelIndex"));
        //zählerAnzeige.style.display = "block";
        if (localStorage.imWarenkorb) {
            localStorage.imWarenkorb = Number(localStorage.imWarenkorb) + 1;
        }
        else {
            localStorage.imWarenkorb = 1;
        }
        console.log(localStorage.imWarenkorb);
        zählerAnzeige.innerHTML = localStorage.imWarenkorb + "";
        if (imWarenkorb == 0) {
            zählerAnzeige.style.display = "none";
        }
        else
            zählerAnzeige.style.display = "block";
        gesamtPreis = aufgabe07.tier[artikelIndex].preis + gesamtPreis;
        console.log("Gesamtpreis:" + gesamtPreis + "€");
        localStorage.setItem("gesamtPreis", gesamtPreis.toString());
    }
    let atrributeInLS = _event.currentTarget.parentElement.getAttribute("zähler");
    localStorage.setItem("foto" + j, aufgabe07.tier[parseInt(atrributeInLS)].imgSrc + "");
    localStorage.setItem("name" + j, aufgabe07.tier[parseInt(atrributeInLS)].Name + "");
    localStorage.setItem("preis" + j, aufgabe07.tier[parseInt(atrributeInLS)].preis + "");
    j++;
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