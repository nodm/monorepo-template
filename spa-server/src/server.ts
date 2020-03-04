import { Server, IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import fastifyFactory from 'fastify';
import fastifyStatic from 'fastify-static';

import {
  serverConfig,
  HTTP_STATUS_CODE_NOT_FOUND,
  INDEX_FILE,
  ROUTE_API,
} from './constants';
import { apiRoute } from './routes/api.route';

const fastify: fastifyFactory.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastifyFactory({
  logger: serverConfig.logger,
});

fastify.register(apiRoute, { prefix: ROUTE_API });

fastify.register(fastifyStatic, {
  root: path.join(__dirname, serverConfig.staticDir),
  prefix: serverConfig.staticPrefix,
});

fastify.register(function (instance, options, done) {
  instance.setNotFoundHandler(function (request, reply): void {
    const requestUrl = request.raw.url;

    if (requestUrl.startsWith(ROUTE_API) || requestUrl.startsWith(serverConfig.staticPrefix)) {
      reply.code(HTTP_STATUS_CODE_NOT_FOUND).send({
        message: `Route ${request.raw.method}: ${requestUrl} not found`,
        error: 'Not Found',
        statusCode: HTTP_STATUS_CODE_NOT_FOUND
      });
    }

    reply.sendFile(INDEX_FILE);
  });

  done();
}, { prefix: '/' });

fastify.listen(serverConfig.port, serverConfig.host)
  .then((address: string) => {
    console.info('Server is running at', address);
    console.info('Server configuration:', serverConfig);
  })
  .catch((err: Error) => {
    fastify.log.error(err);
    process.exit(1);
  });
