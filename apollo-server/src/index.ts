import { ApolloServer } from "apollo-server";

import { schema } from "./schema";

//need to provide schema when instantiating your server since that’s how Apollo Server knows which API operations to support in the GraphQL API.
export const server = new ApolloServer({
  schema,
});

const port = 4000;

server.listen({port}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});