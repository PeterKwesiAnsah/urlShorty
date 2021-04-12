import UrlModel from '../db/models/Url.js';

const handleRouting = async (req, res, next) => {
	if (req.originalUrl === '/graphql' || req.originalUrl === '/') {
		next();
	} else {
		//check code again
		const shortener = req.originalUrl.split('/');
		console.log(shortener);
		const urlObject = await UrlModel.findOne({ where: { shortener } });
		if (urlObject) {
			//get original url
			const { original } = urlObject;
			res.redirect(original);
			res.end();
			return;
		}

		res.write('url not found');
		res.end();
	}
};

export default handleRouting;
