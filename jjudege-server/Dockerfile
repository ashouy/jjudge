FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY ormconfig.json ./ormconfig.json
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]