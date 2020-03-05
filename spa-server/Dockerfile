FROM node:12-alpine as container-build
ENV WORK_DIR=/usr/src/spa-server
WORKDIR $WORK_DIR
RUN mkdir -p $WORK_DIR/src
COPY ./src $WORK_DIR/src
COPY package*.json $WORK_DIR/
COPY tsconfig.json $WORK_DIR/
COPY webpack.config.js $WORK_DIR/
RUN npm install
RUN npm run build

FROM node:12-alpine as container-runtime
ENV WORK_DIR=/usr/src/spa-server \
    NODE_ENV=production
WORKDIR $WORK_DIR
RUN mkdir -p $WORK_DIR/
COPY --from=container-build /$WORK_DIR/dist $WORK_DIR
COPY --from=container-build /$WORK_DIR/package.json $WORK_DIR/
RUN npm install
CMD ["npm", "run", "ci:start"]
