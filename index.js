var destHost = process.env.WEBCAMPROXY_DESTHOST

process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
var http = require('http');
var httpProxy = require('http-proxy');
var url = require('url');

//
// Create a proxy server that cleans invalid headers by using http_parser module
//
var proxy = httpProxy.createProxyServer();

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  console.log("Got request for: " + req.url);
});

proxy.on('error', function(e) {
  console.log("Error: " + e.message);
});

//
// Create your server that makes an operation that waits a while
// and then proxies the request
//
var server = http.createServer(function (req, res) {
  var pathName = url.parse(req.url).pathname;

  if(pathName == "/health") {
    res.writeHead(200, {'Content-type':'text/plain'});
    res.write("OK");
    res.end();
  } else {
    proxy.web(req, res, {
      target: destHost
    });
  }
});

console.log("Server listening...");
server.listen(80);