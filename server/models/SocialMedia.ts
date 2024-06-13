import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const SocialMedia = sequelize.define(
  'SocialMedia',
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

// defining associations
SocialMedia.belongsTo(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserInfoId',
    allowNull: false
  }
});

await sequelize.sync({force: false});

// exporting the models
export default SocialMedia;