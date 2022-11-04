import { createServer } from '@graphql-yoga/node';
import { gatewaySchema as schema } from './gqlSchema.js';


const server = createServer({
  schema: schema,
  port: 4500
});

server.start();