import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class Sponsor extends Model {
  //defining the attributes of the model
  public id!: number;
  public companyRole!: string;
  public institutionName!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Sponsor.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      yearStanding: {
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
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specialization: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Sponsor',
    });
  }
}

// Initialize models
Sponsor.initialize(sequelize);

// defining associations
UserInfo.hasOne(Sponsor, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// exporting the models
export default Sponsor;

await sequelize.sync({force: false});