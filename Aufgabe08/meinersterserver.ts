namespace aufgabe08 {

    document.getElementById("button")?.addEventListener("click", handleData);

    async function handleData(): Promise<void>  {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisjas.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let ausgabe: string = await response.text();
        console.log(ausgabe);

        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
    }

}
}