const sequelize = require('../config/connection');
const { User, Book, BookReview } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const bookReviewData = require('/.bookreviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const books = await Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
  });

  const bookreviews = await BookReview.bulkCreate(bookReviewData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
