import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
export * from './mutations';
export * from './querries';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: 'http://localhost:7000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'Authorization': token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: authLink.concat(httpLink),
  // Provide some optional constructor fields
  name: 'open-cities',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});