import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Permission = sequelize.define(
  'Permission',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

await sequelize.sync({force: false});

// exporting the models
export default Permission;