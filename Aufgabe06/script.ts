namespace aufgabe06 {
    let kategorie: string = "Schafe";
    let gesamtPreis: number = 0;

    document.getElementById("Schäflein")?.addEventListener("click", handlerBeGone);
    document.getElementById("Kühlein")?.addEventListener("click", handlerBeGone);
    document.getElementById("tierliebe")?.addEventListener("click", handlerBeGone);


    for (let i: number = 0; i < tier.length; i++) {
        if (tier[i].Kategorie == "Schafe") {
            kategorie = "Schafe";
        } else {
            kategorie = "Kühe";
        }

        let newDiv: HTMLDivElement = document.createElement("div");

        newDiv.id = "Artikel" + kategorie + i;

        document.getElementById(kategorie)?.appendChild(newDiv);

        let newName: HTMLParagraphElement = document.createElement("p");
        newName.setAttribute("class", "Name");
        newName.setAttribute("id", "Name" + i);
        newName.innerText = tier[i].Name;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newName);

        let newpreis: HTMLElement = document.createElement("preis");
        newpreis.innerHTML = "€" + tier[i].preis;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newpreis);

        let newImg: HTMLImageElement = document.createElement("img");
        newImg.src = tier[i].imgSrc;
        newImg.setAttribute("alt", tier[i].Name);
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newImg);

        let newBeschreibung: HTMLParagraphElement = document.createElement("p");
        newBeschreibung.setAttribute("class", "beschreibung");
        newBeschreibung.innerHTML = tier[i].Beschreibung;
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newBeschreibung);

        let newButton: HTMLInputElement = document.createElement("input");
        newButton.value = "Kaufen";
        newButton.type = "button";
        newButton.setAttribute("artikelIndex", i.toString());
        document.getElementById("Artikel" + kategorie + i)?.appendChild(newButton);
        newButton.addEventListener("click", handlerWK);

    }


    let imWarenkorb: number = 0;


    let zählerAnzeige: HTMLDivElement = document.createElement("div");
    zählerAnzeige.id = "zählerAnzeige";

    document.getElementById("Einkaufswagen")?.appendChild(zählerAnzeige);
    zählerAnzeige.innerHTML = imWarenkorb.toString();


    if (imWarenkorb == 0) {
        zählerAnzeige.style.display = "none";
    }
    else
        zählerAnzeige.style.display = "block";

    function handlerWK(_event: Event): void {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let artikelIndex: number = parseInt(target.getAttribute("artikelIndex")!);
        zählerAnzeige.style.display = "block";

        imWarenkorb++;
        zählerAnzeige.innerHTML = "" + imWarenkorb;

        gesamtPreis = tier[artikelIndex].preis + gesamtPreis;
        console.log("Gesamtpreis:" + gesamtPreis + "€");
    }

    function handlerBeGone(_event: Event): void {
        let target: HTMLElement = (<HTMLElement>_event.target);
        let kategorie: string = target.getAttribute("href")!;

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
}





