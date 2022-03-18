const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookReview extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    star_rating: {
        type: Datatypes.DECIMAL,
    },
    review_date: {
        type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bookReview',
  }
);

module.exports = BookReview;
