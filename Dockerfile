FROM node:16-alpine

WORKDIR /usr/src/app/pri-sale

COPY ./package*.json ./
COPY ./prisma ./

RUN npm i

COPY . .
RUN npx prisma generate
RUN npm run build

CMD ["node", "dist/src/index.js"]