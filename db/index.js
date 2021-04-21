import sql from 'sequelize';

const { Sequelize, DataTypes } = sql;
export const sequelize = new Sequelize(
	process.env.database,
	process.env.username,
	process.env.password
);

export default DataTypes;
