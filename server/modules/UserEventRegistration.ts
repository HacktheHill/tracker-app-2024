import sequelize from "../db";
import Event from "./Event";
import UserInfo from "./UserInfo";

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class UserEventRegistration extends Model {
  //defining the attributes of the model
  public id!: number;
  public regDate!: Date;
  public attended!: Boolean;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    UserEventRegistration.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      regDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      attended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'UserEventRegistration',
    });
  }
}

// Initialize models
UserEventRegistration.initialize(sequelize);

// defining associations
UserInfo.hasOne(UserEventRegistration, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

Event.hasOne(UserEventRegistration, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// exporting the models
export default UserEventRegistration;

await sequelize.sync({force: false});