FROM daocloud.io/node:8.4.0-onbuild

RUN mkdir /var/eas

COPY ./client/dist/ /var/eas/app/assets
COPY ./service/ /var/eas/
COPY ./docker/config.default.js /var/eas/config/config.default.js

RUN cd /var/eas \
	&& npm install --save --registry=https://registry.npm.taobao.org

WORKDIR /var/eas

ENV NODE_ENV=test

EXPOSE 3000

CMD npm run docker
