import sequelize from "./db";
import { DataTypes } from 'sequelize';

export const Product = sequelize.define('product', {
  name: DataTypes.TEXT,
  price: DataTypes.INTEGER
});

await sequelize.sync({force: false})
