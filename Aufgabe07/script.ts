namespace aufgabe07 {

    localStorage.clear();

    let gesamtPreis: number = 0;

    document.getElementById("Schäflein")?.addEventListener("click", handlerBeGone);
    document.getElementById("Kühlein")?.addEventListener("click", handlerBeGone);
    document.getElementById("tierliebe")?.addEventListener("click", handlerBeGone);

    reinMitEuch();

    async function loadProducts(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        tier = JSON.parse(JSON.stringify(jsonArray));
        console.log("test");
    }

    async function reinMitEuch(): Promise<void> {

        let kategorie: string;
        await loadProducts("array.json");

        for (let i: number = 0; i < tier.length; i++) {
            if (tier[i].Kategorie == "Schafe") {
                kategorie = "Schafe";
            } else {
                kategorie = "Kühe";
            }

            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "Artikel" + kategorie + i;
            document.getElementById(kategorie)?.appendChild(newDiv);
            newDiv.setAttribute("zähler", i.toString());

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
    }

    let imWarenkorb: number = 0;

    let zählerAnzeige: HTMLDivElement = document.createElement("div");
    zählerAnzeige.id = "zählerAnzeige";

    let j: number = 0;

    document.getElementById("Einkaufswagen")?.appendChild(zählerAnzeige);
    

    function handlerWK(_event: Event): void {
        imWarenkorb++;
        let target: HTMLElement = (<HTMLElement>_event.target);
        let artikelIndex: number = parseInt(target.getAttribute("artikelIndex")!);

        if (localStorage.imWarenkorb) {
            localStorage.imWarenkorb = Number(localStorage.imWarenkorb) + 1;
        } else {
            localStorage.imWarenkorb = 1;
        }

        console.log(localStorage.imWarenkorb);
        zählerAnzeige.innerHTML = localStorage.imWarenkorb + "";

        if (imWarenkorb == 0) {
            zählerAnzeige.style.display = "none";
        }
        else
            zählerAnzeige.style.display = "block";

        gesamtPreis = tier[artikelIndex].preis + gesamtPreis;
        console.log("Gesamtpreis:" + gesamtPreis + "€");

        localStorage.setItem("gesamtPreis", gesamtPreis.toString());

        let atrributeInLS: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("zähler")!; 
        localStorage.setItem("foto" + j, tier[parseInt(atrributeInLS)].imgSrc + "");
        localStorage.setItem("name" + j, tier[parseInt(atrributeInLS)].Name + "");
        localStorage.setItem("preis" + j, tier[parseInt(atrributeInLS)].preis + "");
        j++;
        
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










