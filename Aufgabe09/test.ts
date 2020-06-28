import * as Http from "http";
import * as Url from "url";

export namespace A09Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);

  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    let adresse: string = "http://localhost:8080/default.htm/ordnerstruktur/blabla?jahr=2017&monat=february";
    //Adresse parsen (umwandeln):
    //tslint:disable-next-line: no-any
    let q: any = Url.parse(adresse, true);

    /*Die parse Methode gibt ein Objekt zurück, dass die URL Eigenschaften enthält. So können die fest definierten Eigenschaften einer URL ausgelesen werden:*/
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);

    /*Die query Eigenschaft gibt ein Ojekt zurück, dass alle query-string Parameter als Eigenschaften besitzt. So können beliebig gesendete Attribute ausgelesen werden:*/
    //tslint:disable-next-line: no-any
    var qdata: any = q.query;
    console.log(qdata.monat);

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");


    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      console.log(url);
      for (let key in url.query) {
        _response.write(key + ": " + url.query[key] + "</br>");
      }
      let jsonString: string = JSON.stringify(url.query);
      _response.write(jsonString);
    }

    _response.write(_request.url);
    _response.write("Hallo ich bin eine response.");
    _response.end();
  }
}