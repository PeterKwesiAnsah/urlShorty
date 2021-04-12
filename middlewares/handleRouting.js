import UrlModel from '../db/models/Url';

const handleRouting =async (req, res, next) => {
	if (req.originalUrl === '/graphql') {
		next();     
	} else {
        const shortener=req.originalUrl.split("/")
        const urlObject=await UrlModel.findOne({where:{shortener}})
		res.send('almost there');
		res.end();
	}
};
