import * as Http from "http"; //http - Modul laden mit allen Finktionalitäten


export namespace A08Server {
  console.log("Starting server"); // Gibt in der Konsole aus "Starting Server"
  let port: number = Number(process.env.PORT); //Sucht ein Port
  if (!port)
    port = 8100; //Setzt den Port auf 8100, wenn er nichts findet

  let server: Http.Server = Http.createServer(); //Server erschaffen
  server.addListener("request", handleRequest); //EventListener für requests erschaffen
  server.addListener("listening", handleListen); //Eventlistener fürs zuhören schaffen
  server.listen(port); //Server hört auf den Port

  function handleListen(): void {
    console.log("Listening"); //wenn die funktion handleListen ausgeführt wird, gibt die Konsole "Listening" aus
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //
    console.log("I hear voices!"); //wenn die funktion handleRequest ausgeführt wird, gibt die Konsole "I hear voices!" aus.
    console.log(URL);
    _response.setHeader("content-type", "text/html; charset=utf-8"); //Antwort ist vom typ Text
    _response.setHeader("Access-Control-Allow-Origin", "*"); //Alle können auf die Antwort zugreifen

    _response.write(_request.url); //URL wird geschrieben

    _response.end(); //Antwort wird an den Client geschickt
  }
}