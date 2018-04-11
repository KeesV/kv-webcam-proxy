# kv-webcam-proxy

Very (and I repeat, _very_) simple proxy server based on Node to proxy requests from a cheap Chinese webcam that produces some invalid headers. Since most HTTP libraries crash on invalid headers, I wanted to filter these out. Hence this script.