import express from 'express';
import Server from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const { ApolloServer } = Server;

//express app
const app = express();

//apolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.get('/', (req, res) => {
	res.redirect('/graphql');
	res.end();
});

(async () => {
	await server.start();
	server.applyMiddleware({ app });
	app.listen({ port: process.env.port || 4000 });
	console.log(
		'Graphql server running at http://localhost:4000' + server.graphqlPath
	);
})();
