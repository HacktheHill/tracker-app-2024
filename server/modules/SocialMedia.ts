import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class SocialMedia extends Model {
  //defining the attributes of the model
  public id!: number;
  public name!: string;
  public link!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    SocialMedia.init({
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

    }, {
      sequelize,
      modelName: 'User',
    });
  }
}

// Initialize models
SocialMedia.initialize(sequelize);

// exporting the models
export default SocialMedia;

await sequelize.sync({force: false});