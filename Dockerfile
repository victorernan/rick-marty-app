FROM node:14-alpine as alpine-build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
RUN npm install 
RUN npm install -g @angular/cli@10.1.7

COPY . /app

COPY /dist/rick-morty-proyect /usr/share/nginx/html

CMD ng serve --host 0.0.0.0

