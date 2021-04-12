import sql from 'sequelize';

const { Sequelize, DataTypes } = sql;

export const sequelize = new Sequelize(
	'postgres://postgres:Engine1234@localhost:5432/urlDB',
	{
		dialect: 'postgres',
	}
);

export default DataTypes;
