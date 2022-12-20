FROM node:16-alpine
WORKDIR /usr/src/app/pri-sale

COPY ./package*.json ./
COPY ./prisma ./prisma

RUN npm install
RUN npm i -g prisma
RUN prisma generate
COPY . .

RUN npm run build

CMD ["node", "dist/src/index.js"]