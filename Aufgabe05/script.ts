namespace aufgabe05 {
    let kategorie: string = "Schafe";

    for (let i: number = 0; i < tier.length; i++) {
       if (tier[i].Kategorie == "Schafe") {
           kategorie = "Schafe";
       } else {
           kategorie = "Kühe";
       }

       console.log(tier[i].Name, tier[i].imgSrc, tier[i].preis);

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
       document.getElementById("Artikel" + kategorie + i)?.appendChild(newButton);
}
}