FROM arm64v8/node

ENV WEBCAMPROXY_DESTHOST http://defaultcam:15318
EXPOSE 80

ADD . /proxy
WORKDIR /proxy
RUN npm install
CMD ["node", "index.js"]
