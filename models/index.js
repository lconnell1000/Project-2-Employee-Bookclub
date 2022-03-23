const User = require('./User');
const Book = require('./Book');
const BookReview = require('./BookReview')
const Genre = require('./Genre')

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
  foreignkey: 'book_id' ,
  onDelete: 'CASCADE'
});

Book.hasOne(Genre, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
})

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

BookReview.belongsTo(User, {
  foreignKey: 'user_id'
});

BookReview.belongsTo(Book, {
  foreignKey: 'book_id'
});

Genre.belongsTo(Book, {
  foreignKey: 'genre_name'
})



module.exports = { User, Book, BookReview, Genre };
