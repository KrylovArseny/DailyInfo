function soap() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', '/DailyInfoWebServ/DailyInfo.asmx', false);

  // build SOAP request
  var sr =
      '<?xml version="1.0" encoding="utf-8"?>' +
      '<soapenv:Envelope ' + 
          'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
          'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
          'xmlns:soap12="http://www.w3.org/2003/05/soap-envelope>' +
          '<soap12:Body>' +
              '<GetLatestDateTime xmlns="http://web.cbr.ru/" />'+
          '</soap12:Body>' +
      '</soap12:Envelope>';

  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
              alert('done. use firebug/console to see network response');
          }
      }
  }
  // Send the POST request
  xmlhttp.setRequestHeader('Content-Type', 'application/soap+xml; charset=utf-8');
  xmlhttp.send(sr);
  // send request
  // ...
}
console.log('d44433ge')

soap()
