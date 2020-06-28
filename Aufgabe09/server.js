"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http"); //http - Modul laden mit allen Finktionalitäten
var A09Server;
(function (A09Server) {
    console.log("Starting server"); // Gibt in der Konsole aus "Starting Server"
    let port = Number(process.env.PORT); //Sucht ein Port
    if (!port)
        port = 8100; //Setzt den Port auf 8100, wenn er nichts findet
    let server = Http.createServer(); //Server erschaffen
    server.addListener("request", handleRequest); //EventListener für requests erschaffen
    server.addListener("listening", handleListen); //Eventlistener fürs zuhören schaffen
    server.listen(port); //Server hört auf den Port
    function handleListen() {
        console.log("Listening"); //wenn die funktion handleListen ausgeführt wird, gibt die Konsole "Listening" aus
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //wenn die funktion handleRequest ausgeführt wird, gibt die Konsole "I hear voices!" aus.
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Antwort ist vom typ Text
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Alle können auf die Antwort zugreifen
        _response.write(_request.url); //URL wird geschrieben
        console.log("Ausgabe: " + _request.url);
        _response.end(); //Antwort wird an den Client geschickt
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map