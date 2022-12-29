require('dotenv').config()
const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once('open',() => {
  console.log('connected to DB');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true // tool to test query
}));

app.listen(4000, () => {
  console.log("listening")
})