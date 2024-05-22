import sequelize from "../db";
import UserInfo from "./UserInfo"

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class User extends Model {
  //defining the attributes of the model
  public id!: number;
  public provider!: string;
  public providerAccountID!: number;
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

  // initializing the model 
  public static initialize(sequelize: Sequelize) {
    User.init({
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

    }, {
      sequelize,
      modelName: 'User',
    });
  }
}

// Initialize models
User.initialize(sequelize);

// exporting the models
export default User;

await sequelize.sync({force: false});