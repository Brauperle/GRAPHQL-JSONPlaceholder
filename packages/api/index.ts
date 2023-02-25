import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Resolvers } from './resolvers-types'

import { POSTS, USERS } from './db';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The GraphQL schema
const typeDefs = readFileSync(
  `${__dirname}/schema.graphql`,
  { encoding: 'utf-8' }
);

// A map of functions which return data for the schema.
const resolvers: Resolvers = {
  Query: {
    posts(){ return POSTS },
    users(){ return USERS },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);