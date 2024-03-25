const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('blogs', 'root', 'root', {
    host: "localhost",
    dialect: "mysql",
});
async function testconnection() {
    try {
      await connection.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
  testconnection();
  
 const db = {};
  
  db.Blog = require("../models/blogs")(connection, DataTypes);
  db.User = require("../models/users")(connection, DataTypes);
  
  db.User.hasMany(db.Blog);
  db.Blog.belongsTo(db.User);
  // connection.sync({ force: true });
  module.exports = db;

