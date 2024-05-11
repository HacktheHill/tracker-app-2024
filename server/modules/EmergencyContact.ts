import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class EmergencyContact extends Model {
  //defining the attributes of the model
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public phoneNumber!: number;
  public realtionship!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    EmergencyContact.init({
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
      phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      realtionship: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'User',
    });
  }
}

// Initialize models
EmergencyContact.initialize(sequelize);

// exporting the models
export default EmergencyContact;

await sequelize.sync({force: false});