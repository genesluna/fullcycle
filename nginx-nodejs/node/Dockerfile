FROM node:20-slim

RUN apt-get update && apt-get install curl -y 

WORKDIR /usr/src/app

COPY . .

RUN npm i --quiet --no-optional -no-fund --loglevel=error 

EXPOSE 3000

CMD ["node","index.js"]