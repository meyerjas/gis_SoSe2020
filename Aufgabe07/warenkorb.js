"use strict";
var aufgabe07;
(function (aufgabe07) {
    let summe = 0;
    let hinterlegen = 0;
    for (let i = 0; i < parseInt(localStorage.getItem("imWarenkorb")); i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "artikel" + i;
        document.getElementById("TiereImWagen")?.appendChild(newDiv);
        let foto = document.createElement("img");
        foto.src = localStorage.getItem("foto" + i);
        document.getElementById("artikel" + i)?.appendChild(foto);
        let name = document.createElement("h3");
        name.innerHTML = localStorage.getItem("name" + i);
        document.getElementById("artikel" + i)?.appendChild(name);
        let preis = document.createElement("p");
        preis.innerHTML = localStorage.getItem("preis" + i) + "€";
        document.getElementById("artikel" + i)?.appendChild(preis);
        hinterlegen = parseFloat(localStorage.getItem("preis" + i));
        summe = summe + hinterlegen;
        newDiv.setAttribute("preis", hinterlegen.toString());
        let zurücklegen = document.createElement("button");
        zurücklegen.innerHTML = "Zurücklegen";
        zurücklegen.setAttribute("artikelIndex", i.toString());
        zurücklegen.addEventListener("click", handlerZurücklegen);
        newDiv.appendChild(zurücklegen);
    }
    let allesZurücklegen = document.createElement("button");
    allesZurücklegen.id = "abreissen";
    allesZurücklegen.innerHTML = "Alles zurücklegen";
    allesZurücklegen.addEventListener("click", handlerAllesZurücklegen);
    document.getElementById("leeren")?.appendChild(allesZurücklegen);
    let gesamtPreis = document.createElement("p");
    gesamtPreis.innerHTML = "Gesamtpreis: " + summe + "€";
    document.getElementById("gesamtPreis")?.appendChild(gesamtPreis);
    gesamtPreis.id = "summe";
    function handlerZurücklegen(_event) {
        (_event.currentTarget.parentElement).remove();
        summe = summe - parseFloat(_event.currentTarget.parentElement.getAttribute("preis"));
        document.getElementById("summe").innerHTML = "Gesamtpreis: " + summe + "€";
    }
    function handlerAllesZurücklegen(_event) {
        document.getElementById("TiereImWagen")?.remove();
        localStorage.clear();
        summe = 0;
        gesamtPreis.innerHTML = "Gesamtpreis: " + summe + "€";
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=warenkorb.js.map