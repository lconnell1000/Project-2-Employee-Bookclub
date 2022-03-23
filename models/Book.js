const { Model, DataTypes } = require('sequelize');
const { Genre } = require('.');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'genre',
        key: 'name',
      }
    },
    file_name: {
      type: DataTypes.STRING,
  },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;
