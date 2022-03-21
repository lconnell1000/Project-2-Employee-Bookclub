const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookCover extends Model {}

BookCover.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'book',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bookCover',
  }
);

module.exports = BookCover;
