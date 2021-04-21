import sql from 'sequelize';

const { Sequelize, DataTypes } = sql;
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
});

export default DataTypes;
