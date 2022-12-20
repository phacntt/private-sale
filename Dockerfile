FROM node:16-alpine

WORKDIR /usr/src/app/pri-sale

COPY ./package*.json ./
# COPY ./prisma ./

RUN npm i
COPY . .
RUN npm run build

RUN npx prisma generate

CMD ["node", "dist/src/index.js"]