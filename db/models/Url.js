import { sequelize } from '../index.js';
import DataTypes from '../index.js';

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

export default Url;
