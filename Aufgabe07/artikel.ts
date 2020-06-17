namespace aufgabe07 {
    export interface Artikel {
        Name: string;
        Beschreibung: string;
        preis: number;
        imgSrc: string;
        Kategorie: string;
    }

    export let artikel: Artikel[];

    export async function loadProducts(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch("https://meyerjas.github.io/gis_SoSe2020/Aufgabe07/shop.html");
        let jsonArray: JSON = await response.json();
        artikel = JSON.parse(JSON.stringify(jsonArray));
}


}