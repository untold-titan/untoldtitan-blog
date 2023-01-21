# My first Dockerfile, lets goooo
FROM node

COPY . /app

WORKDIR /app

RUN npm install

EXPOSE 5173/tcp
EXPOSE 5173/udp

CMD ["npm","run","dev"]
