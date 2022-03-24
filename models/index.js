const User = require('./User');
const Book = require('./Book');
const BookReview = require('./BookReview')

//create associations
User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(BookReview, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Book.hasMany(BookReview, {
  foreignkey: 'book_id',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

BookReview.belongsTo(User, {
  foreignKey: 'user_id'
});

BookReview.belongsTo(Book, {
  foreignKey: 'book_id'
});


module.exports = { User, Book, BookReview };
