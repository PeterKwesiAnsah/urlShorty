import sql from 'sequelize';
// import dotenv from 'dotenv';
// import pg from 'pg';
// dotenv.config();
// console.log(process.env.User);

// var client = new pg.Client({
// 	user: process.env.User,
// 	password: process.env.Password,
// 	database: process.env.Database,
// 	port: 5432,
// 	host: process.env.Host,
// 	ssl: true,
// });
// client.connect();

const { Sequelize, DataTypes } = sql;

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

// `postgres://${process.env.User}:${process.env.Password}@${process.env.Host}:5432/${process.env.Database}`

export default DataTypes;
