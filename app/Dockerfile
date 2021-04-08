FROM node:15-slim

RUN yarn config set proxy "http://proxy.mei.co.jp:8080"
RUN yarn config set https-proxy "http://proxy.mei.co.jp:8080"
RUN yarn install

WORKDIR /app

CMD ["yarn", "start"]