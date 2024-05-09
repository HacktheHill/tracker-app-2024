import sequelize from "../db";
import User from './User';

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class UserInfo extends Model {
  //defining the attributes of the model
  public id!: number;
  public emergencyContactID!: number;
  public lastName!: string;
  public provider!: string;
  public providerAccountID!: string;
  public refresherToken!: number;
  public refresherTokenExpiresIn!: number;
  public accessToken!: number;
  public expiresAt!: Date;
  public scope!: string;
  public tokenType!: string;
  public idToken!: number;
  public recoveryKey!: string;
  public sessionState!: string;
  public extExpiresIn!: number;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    UserInfo.init({
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
      provider: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
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
        autoIncrement: true,
        primaryKey: true,
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
        autoIncrement: true,
        primaryKey: true,
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
        autoIncrement: true,
        primaryKey: true,
      },
      sessionState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      extExpiresIn: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'User',
    });
  }
}

// Initialize models
UserInfo.initialize(sequelize);

// exporting the models
export default UserInfo;

await sequelize.sync({force: false});