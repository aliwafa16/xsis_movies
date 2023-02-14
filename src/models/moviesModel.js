const { DataTypes } = require('sequelize')
const sequelize = require("sequelize");
const db = require('../config/database')

const MoviesModel = db.define(
  "movies",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
    {
      sequelize,
    modelName: 'Movie',
      updatedAt: "updated_at",
      createdAt:'created_at'
  }
);

// MoviesModel.sync({ alter: true });
module.exports = MoviesModel