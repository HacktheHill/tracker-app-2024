import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Organizer extends Model {
  //defining the attributes of the model
  public id!: number;
  public yearStanding!: string;
  public resume!: string;
  public skill!: string;
  public HtHmember!: Boolean;
  public OrganizerRole!: string;
  public institutionName!: string;

  // initializing the model 
  public static initialize(sequelize: Sequelize) {
    Organizer.init({
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
      OrganizerRole: {
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
Organizer.initialize(sequelize);

// defining associations
UserInfo.hasOne(Organizer, {
    onDelete: 'CASCADE',
    foreignKey: {
      name: 'UserInfoId',
      allowNull: false
    }
  });
Organizer.belongsTo(UserInfo);

// exporting the models
export default Organizer;

await sequelize.sync({force: false});