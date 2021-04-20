import { sequelize as conn } from './createTestConnection.js';
import { executeQuery } from './executeQuery.js';

afterAll(() => {
	conn.close();
});

describe('resolvers for valid URLS', () => {
	it('payload should be defined for valid URLs', async () => {
		const VALID_URL =
			'https://www.apollographql.com/docs/apollo-server/testing/testing/#createtestclient';
		const payload = await executeQuery(VALID_URL);

		expect(payload).toBeDefined();
	});

	it('shorten URLS should have the same hostname and path length of 6 characters', async () => {
		const VALID_URL =
			'https://www.apollographql.com/docs/apollo-server/testing/testing/#createtestclient';
		const payload = await executeQuery(VALID_URL);
		const { shortenURL } = payload;
		const parsedURL = new URL(shortenURL);

		const lenthPath = parsedURL.pathname.split('/')[1].length;
		expect(parsedURL.origin).toBe('http://localhost:4000');
		expect(lenthPath).toBe(6);
	});
});

describe('resolver for INVALID URLS', () => {
	it('payload should be null for invalid URLS', async () => {
		const INVALID_URL =
			'https://apollographql/docs/apollo-server/testing/testing/#createtestclient';
		const payload = await executeQuery(INVALID_URL);
		expect(payload.shortenURL).toBeNull();
	});
});
