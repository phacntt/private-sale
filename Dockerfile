FROM node:16-alpine
WORKDIR /usr/src/app/pri-sale
COPY ./package*.json ./
RUN npm i
COPY . .
RUN npm run build

CMD ["node", "dist/src/index.js"]
