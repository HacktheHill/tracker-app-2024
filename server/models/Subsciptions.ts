import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Subscriptions extends Model {
  //defining the attributes of the model
  public id!: number;
  public email!: String;
  public subscribed!: Boolean;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Subscriptions.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subscribed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Subscriptions',
    });
  }
}

// Initialize models
Subscriptions.initialize(sequelize);

// exporting the models
export default Subscriptions;

await sequelize.sync({force: false});