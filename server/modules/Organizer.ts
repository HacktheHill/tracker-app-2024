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

export class Organiser extends Model {
  //defining the attributes of the model
  public id!: number;
  public yearStanding!: string;
  public resume!: string;
  public skill!: string;
  public HtHmember!: Boolean;
  public OrganiserRole!: string;
  public institutionName!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Organiser.init({
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
      HtHmember: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OrganiserRole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Organizer',
    });
  }
}

// Initialize models
Organiser.initialize(sequelize);

// defining associations
UserInfo.hasOne(Organiser, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// exporting the models
export default Organiser;

await sequelize.sync({force: false});