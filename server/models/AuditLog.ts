import sequelize from "../db";
import UserInfo from "./UserInfo"

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class AuditLog extends Model {
  //defining the attributes of the model
  public id!: number;
  public timestamp!: Date;
  public route!: String;
  public action!: String;
  public details!: String;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    AuditLog.init({
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
AuditLog.initialize(sequelize);

// defining associations
UserInfo.hasOne(AuditLog, {
    onDelete: 'CASCADE',
    foreignKey: {
      name: 'UserInfoID',
      allowNull: false,
    }
  });
AuditLog.belongsTo(UserInfo);

// exporting the models
export default AuditLog;

await sequelize.sync({force: false});