function soap() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('POST', '/DailyInfoWebServ/DailyInfo.asmx', false);
  var sr =
      '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
          '<soap:Body>' +
                '<GetCursOnDateXML xmlns="http://web.cbr.ru/">'+
                    '<On_date>dateTime</On_date>'+
                '</GetCursOnDateXML>'+
          '</soap:Body>' +
        '</soap:Envelope>';

  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
              console.log(xmlhttp)
          }
      }
  }



  xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
  xmlhttp.setRequestHeader('SOAPAction', '"http://web.cbr.ru/GetCursOnDateXML"');
  xmlhttp.send(sr);

}




console.log('888')

soap()
