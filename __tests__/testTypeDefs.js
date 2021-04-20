import { gql } from 'apollo-server';

const types = gql`
	type Query {
		shortenURL(url: String!): String
	}
`;

export default types;
