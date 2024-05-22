import sequelize from "../db";
import Sponsor from "./Sponsor";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

export class Payment extends Model {
  //defining the attributes of the model
  public id!: number;
  public amount!: number;
  public tier!: string;
  public logo!: string;
  public paid!: boolean;
  public date!: Date;
  public invoice!: string;

  // initializing the model 
  public static initialize(sequelize: Sequelize) {
    Payment.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      tier: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
          type: DataTypes.STRING,
          allowNull: true,
      },
      paid: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
      },
      date: {
          type: DataTypes.DATE,
          allowNull: true,
      },
      invoice: {
          type: DataTypes.STRING,
          allowNull: true,
      }

    }, {
      sequelize,
      modelName: 'Payment',
    });
  }
}

// Initialize models
Payment.initialize(sequelize);

// defining associations
Sponsor.hasOne(Payment, {
    onDelete: 'CASCADE',
    foreignKey: {
        name: 'SponsorId',
        allowNull: false
        }
  });
Payment.belongsTo(Sponsor);

// exporting the models
export default Payment;

await sequelize.sync({force: false});