FROM node:16.17.0-bullseye-slim

RUN mkdir -p usr/src/app
WORKDIR usr/src/app

COPY package.json .

RUN npm install

COPY ./ .

EXPOSE 3030

CMD ["npm", "start"]