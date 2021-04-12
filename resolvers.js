import checkUrl from './utils/urlCheck.js';
import urlModel from './db/models/Url.js';
import { nanoid } from 'nanoid';

export default {
	Query: {
		shortenURL: async (_, { url }) => {
			if (!checkUrl(url)) {
				throw new Error('Enter a Valid URL');
			}
			const shortener = nanoid().slice(0, 6);
			//saves url into db
			const urlObject = await urlModel.create({ original: url, shortener });
			return urlObject.shortener;
		},
	},
};
