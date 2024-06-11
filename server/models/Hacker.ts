import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Hacker = sequelize.define(
  'Hacker',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institutionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    programName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yearStanding: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessibilityRequirements: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transportRequest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    shirtSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    acceptanceExp: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    walkIn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }
)

Hacker.belongsTo(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserInfoId',
    allowNull: false
  }
});

// exporting the models
export default Hacker;