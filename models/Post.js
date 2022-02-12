const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { post } = require('../controllers/index.js');

class Post extends Models {}

Post.init ({
    //defines our colums
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    postMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
})

module.exports = Post
