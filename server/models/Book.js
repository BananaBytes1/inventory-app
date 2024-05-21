//import our instance that we created
//import DataTypes from sequelize
const sequelize = require('../db')
const { DataTypes } = require('sequelize')
//use the define method to create our model(table)
const Book = sequelize.define('book', {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

// status: {
//     type: DataTypes.ENUM('active', 'inactive', 'graduated'),
//     defaultValue: 'active'
// }

module.exports = {Book}