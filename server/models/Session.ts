import sequelize from "../db";
import User from "./User"

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Session = sequelize.define(
  'Session',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sessionToken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    exp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }
)

// defining associations
Session.belongsTo(User, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'userId',
    allowNull: false,
  }
});

// exporting the models
export default Session;
