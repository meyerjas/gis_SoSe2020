"use strict";
var aufgabe09;
(function (aufgabe09) {
    document.getElementById("htmlButton")?.addEventListener("click", handleHTMLData);
    document.getElementById("jsonButton")?.addEventListener("click", handleJsonData);
    async function handleHTMLData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisjas.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/html";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        let antwort = document.getElementById("antwort");
        antwort.innerHTML = ausgabe;
    }
    async function handleJsonData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisjas.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url = url + "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.json();
        console.log(ausgabe);
    }
})(aufgabe09 || (aufgabe09 = {}));
//# sourceMappingURL=client.js.map