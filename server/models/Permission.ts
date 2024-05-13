import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Permission extends Model {
  //defining the attributes of the model
  public id!: number;
  public name!: string;
  public description!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Permission.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Permission',
    });
  }
}

// Initialize models
Permission.initialize(sequelize);

// exporting the models
export default Permission;

await sequelize.sync({force: false});