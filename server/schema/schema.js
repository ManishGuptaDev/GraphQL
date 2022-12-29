const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data

const books = [
  {name: "anbc", genre: "fantasy", id: "1", authorName: "ccs"},
  {name: "dsvdsv", genre: "Sci-Fi", id: "2", authorName: "ccs"},
  {name: "vdsdsanbc", genre: "horror", id: "3", authorName: "ccs"},
]

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db/other source
        return books.find(b => b.id === args.id);
      }
    },
  },
});


module.exports = new GraphQLSchema({
 query: RootQuery 
});
