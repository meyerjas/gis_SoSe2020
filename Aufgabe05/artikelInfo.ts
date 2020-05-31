namespace aufgabe05 {

    export interface Artikel {
        Name: string;
        Beschreibung: string;
        preis: number;
        imgSrc: string;
        Kategorie: string;
    }

    //Schafe

    export let benno: Artikel = {
        Name: "Benno",
        Beschreibung: "Benno ist ein starker, durchsetzungsfähiger Bock, der kerngesund ist und auf sein neues Zuhause wartet.",
        preis: 250.00,
        imgSrc: "Benno.jpg",
        Kategorie: "Schafe"
    };

    export let boris: Artikel = {
        Name: "Boris",
        Beschreibung: "Boris ist jung und aktiv.",
        preis: 200.00,
        imgSrc: "Boris.jpg",
        Kategorie: "Schafe"
    };
    
    export let blitz: Artikel = {
        Name: "Blitz",
        Beschreibung: "Blitz frisst Gras blitzschnell.",
        preis: 200.00,
        imgSrc: "Blitz.jpg",
        Kategorie: "Schafe"  
    };

    export let conny: Artikel = {
        Name: "Conny",
        Beschreibung: "Conny ist voller Lebensfreude und Tatendrang.",
        preis: 210.00,
        imgSrc: "Conny.jpg",
        Kategorie: "Schafe"
    };

    export let lisl: Artikel = {
        Name: "Lisl",
        Beschreibung: "Lisl ist ein mutiges, temparamentvolles Schaf.",
        preis: 205.00,
        imgSrc: "Lisl.jpg",
        Kategorie: "Schafe"
    };

    export let wollfram: Artikel = {
        Name: "Wollfram",
        Beschreibung: "Wollfram hat sehr viel Wolle. Daraus kann man tolle Sachen machen.",
        preis: 280.00,
        imgSrc: "Wollfram.jpg",
        Kategorie: "Schafe"
    };

    //Kühe

    export let abba: Artikel = {
        Name: "Abba",
        Beschreibung: "Abba ist die Königin der Tanzkühe.",
        preis: 750.00,
        imgSrc: "Abba.jpg",
        Kategorie: "Kühe"
    };

    export let beauty: Artikel = {
        Name: "Beauty",
        Beschreibung: "Eine wunderschöne Kuh.",
        preis: 700.00,
        imgSrc: "Beauty.jpg",
        Kategorie: "Kühe"
    };

    export let milka: Artikel = {
        Name: "Milka",
        Beschreibung: "Die Menschen werden von nah und fern kommen, um sie zu sehen.",
        preis: 800.00,
        imgSrc: "milka.jpg",
        Kategorie: "Kühe"
    };

    export let minni: Artikel = {
        Name: "Minni",
        Beschreibung: "Minni ist eine gutmütige und treue Milchkuh.",
        preis: 500.00,
        imgSrc: "Minni.jpg",
        Kategorie: "Kühe"
    };

    export let scott: Artikel = {
        Name: "Scott",
        Beschreibung: "Ein prächtiges schottisches Hochlandrind.",
        preis: 1700.00,
        imgSrc: "scott.jpg",
        Kategorie: "Kühe"
    };

    export let wissa: Artikel = {
        Name: "Wissa",
        Beschreibung: "Eine einzigartige, vollkommen weiße Kuh. Gibt nur weiße Milch.",
        preis: 1200.00,
        imgSrc: "Wissa.jpg",
        Kategorie: "Kühe"
    };

    //Array

    export let tier: Artikel[] = [benno, boris, blitz, conny, lisl, wollfram, abba, beauty, milka, minni, scott, wissa];

    









}