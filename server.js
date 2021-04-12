import express from 'express';
import Server from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { sequelize } from './db/index.js';
import handleRouting from './middlewares/handleRouting.js';

const { ApolloServer } = Server;

//express app
const app = express();

//init middlewares
app.use(handleRouting);

//apolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => {
		const hostname = req.protocol + '://' + req.get('host');
		return { hostname };
	},
});

app.get('/', (req, res) => {
	res.redirect('/graphql');
	res.end();
	//handle reverything here
});

(async () => {
	await server.start();
	server.applyMiddleware({ app });
	app.listen({ port: process.env.port || 4000 });
	try {
		await sequelize.authenticate();
		console.log('connection sucessfully');
	} catch (e) {
		console.log(e);
	}
	console.log(
		'Graphql server running at http://localhost:4000' + server.graphqlPath
	);
})();
