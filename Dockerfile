FROM node:8-alpine

RUN apk --no-cache add openssl && \
    wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 && \
    chmod +x /usr/local/bin/dumb-init && \
    apk del openssl

ENV APPDIR /home/node/toy-robot

WORKDIR $APPDIR

ADD . $APPDIR
ADD ./@types $APPDIR

ENV NODE_ENV=production

RUN npm config set registry http://registry.npmjs.org/ && \
  npm install -g -s --no-progress yarn --pure-lockfile && \
  yarn install --production=false && \
  yarn run build && \
  yarn cache clean && \
  yarn install --production=true --pure-lockfile && \
  chmod +x ./bin/run

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

CMD $APPDIR/bin/run
