FROM node:16-alpine3.16

WORKDIR /usr/src/app/pri-sale

COPY ./package*.json ./
COPY ./prisma ./prisma

RUN npm i
RUN npx prisma generate
RUN npm run prisma:migrate init 
COPY . .
RUN npm run build

CMD ["node", "dist/src/index.js"]