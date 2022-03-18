const User = require('./User');
const Project = require('./Project');
const Book = require('./Book');
const BookReview = require('./BookReview')

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(BookReview, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

BookReview.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Project };
