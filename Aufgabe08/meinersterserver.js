"use strict";
var aufgabe08;
(function (aufgabe08) {
    document.getElementById("button")?.addEventListener("click", handleData);
    async function handleData() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisjas.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let ausgabe = await response.text();
        console.log(ausgabe);
    }
})(aufgabe08 || (aufgabe08 = {}));
//# sourceMappingURL=meinersterserver.js.map