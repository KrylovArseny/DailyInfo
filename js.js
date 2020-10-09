function soap() {
  var symbol = "MSFT";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "/DailyInfoWebServ/DailyInfo.asmx HTTP/1.1", true);
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      alert(xmlhttp.responseText);
      // http://www.terracoder.com convert XML to JSON
      var json = XMLObjectifier.xmlToJSON(xmlhttp.responseXML);
      var result = json.Body[0].GetQuoteResponse[0].GetQuoteResult[0].Text;
      // Result text is escaped XML string, convert string to XML object then convert to JSON object
      json = XMLObjectifier.xmlToJSON(XMLObjectifier.textToXML(result));
      alert(symbol + ' Stock Quote: $' + json.Stock[0].Last[0].Text);
    }
  }
  xmlhttp.setRequestHeader("SOAPAction", "http://web.cbr.ru/GetCursOnDateXML");
  xmlhttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
  var xml = '<?xml version="1.0" encoding="utf-8"?>' +
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soapenv:Envelope ' +
    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
    'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
    'xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">' +
    '<soap12:Body>' +
    '<GetLatestDateTime xmlns="http://web.cbr.ru/" />' +
    '</soap12:Body>' +
    '</soapenv:Envelope>';
  xmlhttp.send(xml);
  // ...Include Google and Terracoder JS code here...
}

soap()
