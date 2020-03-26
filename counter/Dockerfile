FROM node:alpine

WORKDIR /opt/app

COPY  package.json . 
##kolejnosc wazna najpierw package.json copy potem run npm install

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]

