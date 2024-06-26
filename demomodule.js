var http = require("http"); // same like #include
var dt = require('./mydatemodule'); // . = ตำแหน่งปัจจุบัน ,.. = ตำแหน่งย้อนไปหนึ่งระดับ ,/ = อ่านไฟล์ ชื่อ


http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    //call myDateTime(export)
    res.write("The date and time are currently: " + dt.myDateTime());
  
     res.end();
  
  }).listen(8080);
  console.log('Server running athttp://127.0.0.1:8080/');