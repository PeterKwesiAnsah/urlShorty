import sql from 'sequelize';

const { Sequelize, DataTypes } = sql;
export const sequelize = new Sequelize(
	process.env.database,
	'fxygxqzjgiiqgp',
	process.env.password,
	{
		host: process.env.host,
		dialect: 'postgres',
	}
);

export default DataTypes;
