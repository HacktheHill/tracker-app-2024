import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Subscriptions = sequelize.define(
  'Subscriptions',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subscribed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }
)

await sequelize.sync({force: false});

// exporting the models
export default Subscriptions;