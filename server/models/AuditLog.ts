import UserInfo from "./UserInfo"
import {
  Sequelize,
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize';

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes): ModelStatic<Model<any, any>> => {
  const AuditLog = sequelize.define(
    'AuditLog',
    {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      timestamp: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      route: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      action: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      details: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    }
  )

  // defining associations
  //AuditLog.belongsTo(UserInfo, {
  //  onDelete: 'CASCADE',
  //  foreignKey: {
  //    name: 'UserInfoId',
  //    allowNull: false
  //  }
  //});

  return AuditLog;
}
