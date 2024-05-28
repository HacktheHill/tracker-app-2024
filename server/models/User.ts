import sequelize from "../db";
import UserInfo from "./UserInfo";
import {DataTypes} from 'sequelize';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    providerAccountID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refresherToken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    refresherTokenExpiresIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    scope: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tokenType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idToken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recoveryKey: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sessionState: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extExpiresIn: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
)

User.belongsTo(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserInfoId',
    allowNull: true,
  }
});

await sequelize.sync({force: false});

// exporting the models
export default User;