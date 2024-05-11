import sequelize from "../db";
import UserInfo from "./UserInfo"

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export class Session extends Model {
  //defining the attributes of the model
  public id!: number;
  public timestamp!: Date;
  public route!: String;
  public action!: String;
  public details!: String;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Session.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      route: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'AuditLog',
    });
  }
}

// Initialize models
Session.initialize(sequelize);

// defining associations
UserInfo.hasOne(Session, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
  });

// exporting the models
export default Session;

await sequelize.sync({force: false});