namespace aufgabe07 {
    export interface Artikel {
        Name: string;
        Beschreibung: string;
        preis: number;
        imgSrc: string;
        Kategorie: string;
    }

    export let artikel: Artikel[];
}