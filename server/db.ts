import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

let {POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_ADDR, POSTGRES_DB, NODE_ENV} = process.env;
POSTGRES_USER = NODE_ENV === 'development' ? 'dev' : POSTGRES_USER;
POSTGRES_PASSWORD = NODE_ENV === 'development' ? 'hackthehill' : POSTGRES_PASSWORD;
POSTGRES_ADDR = NODE_ENV === 'development' ? 'postgres:5432' : POSTGRES_ADDR;
POSTGRES_DB = NODE_ENV === 'development' ? 'tracker-db' : POSTGRES_DB;

const sequelize: Sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_ADDR}/${POSTGRES_DB}`)

try {
  await sequelize.authenticate();
  console.log('Database connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;