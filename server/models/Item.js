const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const PricelistItem = sequelize.define('PricelistItem', {
  articleNo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  product: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  unit: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  inStock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}
);

module.exports = PricelistItem;
