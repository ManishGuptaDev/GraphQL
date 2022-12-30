import { makeSchema } from "nexus";
import { join } from "path";

export const schema = makeSchema({
  types: [], // GraphQL schema will consist of many types that we will pass as an array
  outputs: {
    schema: join(process.cwd(), "schema.graphql"), // The first output file that Nexus will generate for you is a GraphQL schema file of type .graphql. This is the GraphQL Schema Definition Language (SDL) for defining the structure of your API.
    typegen: join(process.cwd(), "nexus-typegen.ts"), // The second output file is a TypeScript file known as typegen, which will contain TypeScript type definitions for all types in your GraphQL schema. These generated types will help ensure typesafety in your application code and keep your GraphQL schema definition in sync with your schema implementation. 
  },
});
