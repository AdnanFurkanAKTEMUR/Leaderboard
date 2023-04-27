import { HttpLink, ApolloClient, InMemoryCache, DefaultOptions } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
};
const httpLink = new HttpLink({
  uri: "https://www.aaktemur.com.tr/graphql",
  credentials: "include"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
})

export default client