var http = require("http"); // same like #include

var listener=function(req,res){ //(req=requset,res=response)
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200=header
    res.end('<h2 style="text-align: center;">Hello World</h2>');
}
server = http.createServer(listener);
server.listen(3000); //กำหนดให้พอร์ตทำงานอยู่ที่หมายเลข 3000 ใช้ได้ที่ 1024-65535

console.log('Server running athttp://127.0.0.1:3000/');