import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Mentor = sequelize.define(
  'Mentor',
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
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyRole: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
)

// defining associations
Mentor.belongsTo(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserInfoId',
    allowNull: false
  }
});

await sequelize.sync({force: false});

// exporting the models
export default Mentor;