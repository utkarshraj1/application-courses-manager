import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const cache = new InMemoryCache();

const restLink = new RestLink({
  uri: 'localhost:3000',
});

export const client = new ApolloClient({
  cache,
  link: restLink,
});
