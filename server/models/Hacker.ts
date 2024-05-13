import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Hacker extends Model {
  //defining the attributes of the model
  public id!: number;
  public resume!: string;
  public institutionName!: string;
  public programName!: string;
  public yearStanding!: number;
  public skill!: string;
  public accessibilityRequirements!: string;
  public transportRequest!: boolean;
  public shirtSize!: number;
  public acceptanceExp!: Date;
  public walkIn!: boolean;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Hacker.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      resume: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      programName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yearStanding: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      skill: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accessibilityRequirements: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyRole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transportRequest: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      shirtSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      acceptanceExp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      walkIn: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Hacker',
    });
  }
}

// Initialize models
Hacker.initialize(sequelize);

// defining associations
UserInfo.hasOne(Hacker, {
    onDelete: 'CASCADE',
    foreignKey: {
      name: 'UserInfoID',
      allowNull: false
    }
  });

// exporting the models
export default Hacker;

await sequelize.sync({force: false});