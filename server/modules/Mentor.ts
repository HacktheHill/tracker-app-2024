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

export class Mentor extends Model {
  //defining the attributes of the model
  public id!: number;
  public resume!: string;
  public skill!: string;
  public specialization!: string;
  public companyRole!: string;
  public institutionName!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Mentor.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      yearStanding: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resume: {
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
      modelName: 'Mentor',
    });
  }
}

// Initialize models
Mentor.initialize(sequelize);

// defining associations
UserInfo.hasOne(Mentor, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// exporting the models
export default Mentor;

await sequelize.sync({force: false});