FROM node:6.10.0
RUN mkdir -p /usr/src/testPGNode
WORKDIR /usr/src/testPGNode

COPY . /usr/src/testPGNode
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]