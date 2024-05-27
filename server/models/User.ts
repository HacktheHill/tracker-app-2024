import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

class User extends Model {}

// initializing the model and defining its attributes
  User.init(
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
        type: DataTypes.NUMBER,
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
  }, 
    {sequelize},
  );

// exporting the models
export default User;

await sequelize.sync({force: false});