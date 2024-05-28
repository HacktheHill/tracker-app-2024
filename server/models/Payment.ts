import sequelize from "../db";
import Sponsor from "./Sponsor";

import {
  Sequelize,
  DataTypes,
  Model,
} from 'sequelize';

const Payment = sequelize.define(
  'Payment',
  {
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
  }
)

// defining associations
Payment.belongsTo(Sponsor, {
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'SponsorId',
    allowNull: false
  }
});

// exporting the models
export default Payment;
