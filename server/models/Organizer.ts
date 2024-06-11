import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Organizer = sequelize.define(
  'Organizer',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    yearStanding: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skill: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HtHmember: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OrganizerRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutionName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }
)

// defining associations
Organizer.belongsTo(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserInfoId',
    allowNull: false
  }
});

// exporting the models
export default Organizer;