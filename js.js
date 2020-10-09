function soap() {
  var url = "http://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx";
var soapXml = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:web=\"http://www.webserviceX.NET/\"> "+
         "<soapenv:Header/> "+
         "<soapenv:Body> "+
         "<web:GetQuote> "+
         "<web:symbol></web:symbol> "+
         "</web:GetQuote> "+
         "</soapenv:Body> "+
         "</soapenv:Envelope> ";

    return $http({
          url: url,  
          method: "POST",  
          data: soapXml,  
          headers: {  
              "Content-Type": "text/xml; charset=utf-8"
          }  
      })
      .then(callSoapComplete)
      .catch(function(message){
         return message;
      });

    function callSoapComplete(data, status, headers, config) {
        // Convert to JSON Ojbect from xml
        // var x2js = new X2JS();
        // var str2json = x2js.xml_str2json(data.data);
        // return str2json;
        return data.data;
    }
}
console.log('dfge')

soap()
