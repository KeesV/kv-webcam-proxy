var destHost = process.env.WEBCAMPROXY_DESTHOST

process.binding('http_parser').HTTPParser = require('http-parser-js').HTTPParser;
var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server that cleans invalid headers by using http_parser module
//
var proxy = httpProxy.createProxyServer();

proxy.on('proxyReq', function(proxyReq, req, res, options) {
  console.log("Got request for: " + req.url);
});

//
// Create your server that makes an operation that waits a while
// and then proxies the request
//
var server = http.createServer(function (req, res) {
  // This simulates an operation that takes 500ms to execute
  proxy.web(req, res, {
    target: destHost
  });
});

console.log("Server listening...");
server.listen(80);