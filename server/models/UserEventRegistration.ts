import sequelize from "../db";
import Event from "./Event";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

const UserEventRegistration = sequelize.define(
  'UserEventRegistration',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    regDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    attended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }
)

// defining associations
UserEventRegistration.belongsTo(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserInfoId',
    allowNull: false,
  }
});

UserEventRegistration.belongsTo(Event, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'EventId',
    allowNull: false,
  }
});

// exporting the models
export default UserEventRegistration;