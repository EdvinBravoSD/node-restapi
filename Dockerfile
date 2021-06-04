FROM node:14.17.0

WORKDIR /app_prueba

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]