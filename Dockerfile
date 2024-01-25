FROM node:14
LABEL org.opencontainers.image.source=https://github.com/TamarShayo/SingleNum1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
