FROM node:21-slim

RUN apt-get update && apt-get install curl -y 

WORKDIR /home/node/app

COPY . .

EXPOSE 3000

CMD ["node","index.js"]