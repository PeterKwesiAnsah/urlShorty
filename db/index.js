import sql from 'sequelize';
import PG from 'pg';

const { Sequelize, DataTypes } = sql;
// const client = new PG.Client('postgres://postgres:Engine1234@localhost:5432');

// export const initdb = (async () => {
// 	await client.connect();
// 	await client.query('CREATE SCHEMA IF NOT EXISTS URLDB');
// })();

// const client = new pg.Connection(
// 	'postgres://postgres:Engine1234@localhost:5432'
// );
// try{
// 	client.query('CREATE DATABASE IF NOT EXISTS testdb')
// }
// catch(e){
// 	console.log(e)
// }

export const sequelize = new Sequelize(
	'postgres://postgres:Engine1234@localhost:5432/urlDB',
	{
		dialect: 'postgres',
	}
);

export default DataTypes;
