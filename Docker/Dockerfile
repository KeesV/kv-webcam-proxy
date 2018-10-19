FROM arm64v8/node

ENV WEBCAMPROXY_DESTHOST http://defaultcam:15318
EXPOSE 80

ADD . /proxy
WORKDIR /proxy
RUN npm install

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/health || exit 1

CMD ["node", "index.js"]
