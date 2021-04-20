import { createTestClient } from 'apollo-server-testing';
import typeDefs from './testTypeDefs.js';
import resolvers from '../resolvers.js';
import { ApolloServer } from 'apollo-server-express';
import { urlTestModel as urlModel } from './createTestConnection.js';

const testServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ hostname: 'http://localhost:4000' }),
	dataSources: () => ({ urlModel }),
});

const GET_SHORTENURL = `
query getShortenUrl($url:String!){
    shortenURL(url:$url)
  }
`;

const { query } = createTestClient(testServer);

export const executeQuery = async (url) => {
	try {
		const { data } = await query({
			query: GET_SHORTENURL,
			variables: { url: url },
		});

		return data;
	} catch (e) {
		throw e;
	}
};
