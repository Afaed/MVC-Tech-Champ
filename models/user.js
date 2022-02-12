const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Hooks } = require('sequelize/types/hooks');

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//general tools to do establish user information.
User.init ({
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
username: {
    type: DataTypes.STRING,
    allowNull: false,
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {len: [4] 
    }
},
github: {
    type: DataTypes.STRING,
    allowNull: true
}
},
{
    Hooks: {
        async beforeCreate(newUserData){
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updateUserdata){
            updateUserdata = await bcrypt.hash(updateUserdata.password, 10);
            return updateUserdata;
        }
    }
})

module.exports = User;