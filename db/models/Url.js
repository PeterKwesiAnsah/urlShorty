import { sequelize } from '../index.js';
import DataTypes from '../index.js';
import { nanoid } from 'nanoid';

const Url = sequelize.define('Url', {
	original: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	shortener: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

//create table if it does not exist,do nothing if it exists
Url.sync({ force: true });

export default Url;
