import sequelize from "../db";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Sponsor extends Model {
  //defining the attributes of the model
  public id!: number;
  public companyRole!: string;
  public companyName!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Sponsor.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      companyRole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      }

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
    onDelete: 'CASCADE',
    foreignKey: {
      name: 'UserInfoID',
      allowNull: false
    }
  });

// exporting the models
export default Sponsor;

await sequelize.sync({force: false});