# kv-webcam-proxy

Very (and I repeat, _very_) simple proxy server based on Node to proxy requests from a cheap Chinese webcam that produces some invalid headers. Since most HTTP libraries crash on invalid headers, I wanted to filter these out. Hence this script.

- Build: `.\build.sh`
- Run: `docker run -d -p <sourceport>:80 -e WEBCAMPROXY_DESTHOST=http://mywebcam:15318 kverhaar/kv-webcam-proxy`

## Notes
- Base image in the Dockerfile is currently arm64v8/node, since I'm running on ARM (Odroid C2). You should be able to change this to any base image that contains Node.
- Modify `build.sh` to tag the created image to your liking.