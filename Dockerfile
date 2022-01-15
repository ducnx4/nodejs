FROM mhart/alpine-node

EXPOSE 3000
WORKDIR /nodejs
COPY . /nodejs

CMD ["node", "server.js"]