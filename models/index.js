const comment = require('./comment');
const user = require('./user');
const Post= require('./Post');
const { DataTypes } = require('sequelize/types/index');
const User = require('./user');
const { post } = require('../controllers');

// comment belongsTo user
comment.belongsTo(user, {
    foreignKey: 'user_id'
  });
// user have many comments
user.hasMany(comment, {
  foreignKey: 'comment_id',
  onDelete: 'SET NULL'
})
// COMMENT THAT BELONGS TO POST
comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
})
// Post that belongs to user.
Post.belongto(user, {
  Through: user,
  foreign_key: 'user_id',
  onDelete: 'SET NULL'
})

module.exports = {
 comment,
 Post,
 user
};