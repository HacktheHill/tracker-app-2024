import sequelize from "../db";
import EmergencyContact from "./EmergencyContact";
import Permission from "./Permission";
import SocialMedia from "./SocialMedia";
import User from './User';

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const UserInfo = sequelize.define(
  'UserInfo',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferredName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    externalAttendedHackathon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexualOrient: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    race: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    dietaryRestrec: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passportQrCode: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    attendanceMode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

UserInfo.belongsTo(Permission, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'PermissionId',
    allowNull: false,
  }
});

UserInfo.belongsTo(EmergencyContact, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'EmergencyContactId',
    allowNull: false,
  }
});

await sequelize.sync({force: false});

// exporting the models
export default UserInfo;