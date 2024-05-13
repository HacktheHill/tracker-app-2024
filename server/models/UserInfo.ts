import sequelize from "../db";
import EmergencyContact from "./EmergencyContact";
import Permission from "./Permission";
import SocialMedia from "./SocialMedia";
import User from './User';

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class UserInfo extends Model {
  //defining the attributes of the model
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public externalAttendedHackathon!: string;
  public userRole!: string;
  public prefferedName!: string;
  public email!: string;
  public gender!: string;
  public sexualOrient!: string;
  public race!: string;
  public dietaryRestrec!: string;
  public bio!: string;
  public passportQrCode!: Blob;
  public dateOfBirth!: Date;
  public avatar!: Blob;
  public attendanceMode!: string;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    UserInfo.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      externalAttendedHackathon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userRole: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prefferedName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexualOrient: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      race: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      dietaryRestrec: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passportQrCode: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      avatar: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      attendanceMode: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'UserInfo',
    });
  }
}

// Initialize models
UserInfo.initialize(sequelize);

// defining associations
User.hasOne(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'UserID',
    allowNull: false,
  }
});

EmergencyContact.hasOne(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
  name: 'EmergencyContactID',
  allowNull: true,
  }
});

Permission.hasOne(UserInfo, {
  onDelete: 'CASCADE',
  foreignKey: {
  name: 'PermissionID',
  allowNull: false,
  }
});

// exporting the models
export default UserInfo;

await sequelize.sync({force: false});