FROM node:14

WORKDIR /app

EXPOSE 8888

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "app.js" ]