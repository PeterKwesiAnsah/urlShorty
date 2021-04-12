import graphql from 'apollo-server-express';
const { gql } = graphql;

const types = gql`
	type Query {
		shortenURL(url: String!): String
	}
`;

export default types
