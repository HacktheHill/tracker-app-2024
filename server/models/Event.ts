import sequelize from "../db";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Event extends Model {
  //defining the attributes of the model
  public id!: number;
  public startDate!: Date;
  public endDate!: Date;
  public hostName!: String;
  public description!: String;
  public location!: String;
  public image!: Blob;
  public eventType!: String;
  public regLink!: String;

  // intializing the model 
  public static initialize(sequelize: Sequelize) {
    Event.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hostName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      eventType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      regLink: {
        type: DataTypes.STRING,
        allowNull: true,
      }

    }, {
      sequelize,
      modelName: 'Event',
    });
  }
}

// Initialize models
Event.initialize(sequelize);

// exporting the models
export default Event;

await sequelize.sync({force: false});