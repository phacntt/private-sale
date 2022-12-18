FROM node:16-alpine
WORKDIR /usr/src/app/pri-sale
COPY ./package*.json ./
RUN yarn
COPY . .
RUN yarn build

CMD ["node", "dist/src/index.js"]
