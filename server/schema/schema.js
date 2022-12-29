const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

// dummy data

const books = [
  { name: "anbc", genre: "fantasy", id: "1", autherId: "3" },
  { name: "dsvdsv", genre: "Sci-Fi", id: "2", autherId: "2" },
  { name: "vdsdsanbc", genre: "horror", id: "3", autherId: "1" },
  { name: "anbc", genre: "fantasy", id: "4", autherId: "3" },
  { name: "dsvdsv", genre: "fantasy", id: "5", autherId: "2" },
  { name: "vdsdsanbc", genre: "horror", id: "6", autherId: "1" },
];

const authers = [
  { name: "Manish", age: 34, id: "1" },
  { name: "Ivaan", age: 3, id: "2" },
  { name: "Terry", age: 66, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authers, { id: parent.autherId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, {autherId: parent.id})
      }
    }
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return books.find((b) => b.id === args.id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db/other source
        return _.find(authers, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
