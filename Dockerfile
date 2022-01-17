FROM mhart/alpine-node

EXPOSE 80
WORKDIR /nodejs
COPY . /nodejs

CMD ["node", "server.js"]