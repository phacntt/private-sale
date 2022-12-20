FROM node:16-alpine

WORKDIR /usr/src/app/pri-sale

COPY ./package*.json ./
COPY ./prisma ./prisma/

RUN npm i
RUN npm i --save-dev @prisma/client

COPY . .
RUN npx prisma generate
RUN npm run build

CMD ["node", "dist/src/index.js"]