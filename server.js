import express from 'express';
import Server from 'apollo-server-express';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import { sequelize } from './db/index.js';
import handleRouting from './middlewares/handleRouting.js';
import urlModel from './db/models/Url.js';

const { ApolloServer } = Server;

//express app
const app = express();

//init middlewares
app.use(handleRouting);

//apolloServer
const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
	context: ({ req }) => {
		const hostname = req.protocol + '://' + req.get('host');
		return { hostname };
	},
	dataSources: () => ({ urlModel }),
});

app.get('/', (req, res) => {
	res.redirect('/graphql');
	res.end();
	//handle reverything here
});

const initServer = async () => {
	await server.start();
	server.applyMiddleware({ app });
	app.listen({ port: process.env.PORT || 4000 });

};

export default initServer;
