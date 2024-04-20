FROM node:19

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3000

