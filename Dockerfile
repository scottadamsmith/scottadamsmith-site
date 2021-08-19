FROM node:16.7.0-alpine as dev

RUN apk update && apk upgrade && \
    apk add --no-cache git

RUN mkdir /home/node/app && chown -hR node /home/node/app
USER node
WORKDIR /home/node/app
COPY . .
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
RUN npm -g config set user node
RUN npm install -g create-react-app@4.0.3