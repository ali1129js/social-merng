const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const { MONGODB } = require("./config.js");

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    return server.listen({ port: 5000 }).then((res) => {
      console.log(`Server is running at ${res.url}`);
    });
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
