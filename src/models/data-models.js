const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const db = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jenis_kelamin: {
        type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
        allowNull: false
    }, 
});

db.sync({ alter: true })
  .then(() => console.log("Models synced"))
  .catch((error) => console.error(`Unable to sync database: ${error}`));

module.exports = User;