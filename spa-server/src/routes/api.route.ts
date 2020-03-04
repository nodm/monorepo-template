import { spaConfig, ROUTE_CONFIG } from '../constants';

export async function apiRoute(fastify: any, options?: any) {
  fastify.get(ROUTE_CONFIG, options, async () => ({ config: spaConfig }));
}
