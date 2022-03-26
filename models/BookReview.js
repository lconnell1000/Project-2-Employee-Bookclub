const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BookReview extends Model {}

BookReview.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    star_rating: {
        type: DataTypes.DECIMAL,
        validate: {
            max: [5],
          },
    },
    review_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'book',
            key: 'id',
        }
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
