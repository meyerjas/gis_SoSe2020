namespace aufgabe09 {

    document.getElementById("htmlButton")?.addEventListener("click", handleHTMLData);
    document.getElementById("jsonButton")?.addEventListener("click", handleJsonData);

    async function handleHTMLData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisjas.herokuapp.com";
        url = url +  "/html";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        let antwort: HTMLElement = <HTMLElement> document.getElementById("antwort");
        antwort.innerHTML = ausgabe;
    }

    async function handleJsonData(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisjas.herokuapp.com";
        url = url + "/json";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let ausgabe: string = await response.json();
        console.log(ausgabe);

    }
}