FROM node:14.17 as development

WORKDIR /usr/src/app

RUN npm install

COPY  . .
