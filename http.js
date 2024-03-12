const http = require('http');

// función for create server
// http.createServer(function (req, res) { //req = request and res = response
//     res.writeHead(200,{'Content-type': 'text/html'});
//     res.write('<h1>Hola Mundo desde node js</h1>');
//     res.end();
// }).listen(3000);  // Port 3000 your server

// Abreviature
const handlerServer = function (req, res) { //req = request and res = response
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('<h1>Hola Mundo desde node js</h1>');
    res.end();
}

http.createServer(handlerServer).listen(3000, function () {
    console.log('Server on port 3000');
}); // Port 3000 your server