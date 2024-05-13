import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
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
        allowNull: true,
      },
      resume: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      skill: {
        type: DataTypes.STRING,
        allowNull: true,
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
        allowNull: true,
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
    onDelete: 'CASCADE',
    foreignKey: {
      name: 'UserInfoID',
      allowNull: false
    }
  });

// exporting the models
export default Organiser;

await sequelize.sync({force: false});