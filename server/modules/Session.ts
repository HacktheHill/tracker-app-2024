import sequelize from "../db";
import User from "./User"

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class Session extends Model {
  //defining the attributes of the model
  public id!: number;
  public sessionToken!: number;
  public exp!: Date;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Session.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sessionToken: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      exp: {
        type: DataTypes.DATE,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Session',
    });
  }
}

// Initialize models
Session.initialize(sequelize);

// defining associations
User.hasOne(Session, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// exporting the models
export default Session;

await sequelize.sync({force: false});