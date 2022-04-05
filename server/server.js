const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
<<<<<<< HEAD

const PORT = process.env.PORT || 4000;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

server.listen(PORT).then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
=======
const PORT = process.env.PORT || 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
>>>>>>> b9cde6f17d12c509c1e9bb7145254a0b4fa476c1
});
