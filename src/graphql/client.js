import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const headers = {
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET,
};

console.log(process.env.REACT_APP_HASURA_SECRET);

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://instagram-react-clone-lite.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
