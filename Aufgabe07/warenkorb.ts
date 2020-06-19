namespace aufgabe07 {

    let summe: number = 0;
    let hinterlegen: number = 0;


    for (let i: number = 0; i < localStorage.imWarenkorb; i++) {

        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "artikel" + i;
        document.getElementById("TiereImWagen")?.appendChild(newDiv);

        let foto: HTMLImageElement = document.createElement("img");
        foto.src = <string> localStorage.getItem("foto" + i);
        document.getElementById("artikel" + i)?.appendChild(foto);

        let name: HTMLParagraphElement = document.createElement("h3");
        name.innerHTML = <string> localStorage.getItem("name" + i);
        document.getElementById("artikel" + i)?.appendChild(name);

        let preis: HTMLParagraphElement = document.createElement("p");
        preis.innerHTML = <string> localStorage.getItem("preis" + i) + "€";
        document.getElementById("artikel" + i)?.appendChild(preis);
        hinterlegen = parseFloat(localStorage.getItem("preis" + i)!);
        summe = summe + hinterlegen;
        newDiv.setAttribute("preis", hinterlegen.toString());

        
        let zurücklegen: HTMLButtonElement = document.createElement("button");
        zurücklegen.innerHTML = "Zurücklegen";
        zurücklegen.setAttribute("artikelIndex", i.toString());
        zurücklegen.addEventListener("click", handlerZurücklegen);
        newDiv.appendChild(zurücklegen);
    }

    let allesZurücklegen: HTMLButtonElement = document.createElement("button");
    allesZurücklegen.id = "abreissen"; 
    allesZurücklegen.innerHTML = "Alles zurücklegen";
    allesZurücklegen.addEventListener("click", handlerAllesZurücklegen);
    document.getElementById("leeren")?.appendChild(allesZurücklegen);

    let gesamtPreis: HTMLParagraphElement = document.createElement("p");
    gesamtPreis.innerHTML = "Gesamtpreis: " + summe + "€";
    document.getElementById("gesamtPreis")?.appendChild(gesamtPreis);
    gesamtPreis.id = "summe";

    function handlerZurücklegen(_event: Event): void {
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
        summe = summe - parseFloat((<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!);
        document.getElementById("summe")!.innerHTML = "Gesamtpreis: " + summe + "€";
    }

    function handlerAllesZurücklegen(_event: Event): void {
        document.getElementById("TiereImWagen")?.remove();
        localStorage.clear();
        summe = 0;
        gesamtPreis.innerHTML = "Gesamtpreis: " + summe + "€";
    }


    }







    
