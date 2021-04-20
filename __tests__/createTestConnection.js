import sql from 'sequelize';

const { Sequelize, DataTypes } = sql;

export const sequelize = new Sequelize(
	'postgres://postgres:Engine1234@localhost:5432/url-test-db',
	{
		dialect: 'postgres',
		logging: false,
	}
);

export const urlTestModel = sequelize.define('Url', {
	original: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	shortener: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

// urlTestModel.sync({ force: true });
