const DataTypes = require('sequelize');
const sequelize = require('../connection');
const Op = DataTypes.Op;


const tasks = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
      },
      task: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        field: 'task'
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'description'
      },
      timeline: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'timeline'
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
        field: 'status'
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'priority'
      }
}, {
  tableName: 'tasks'
});
tasks.sync(); //{alter: true}
module.exports = tasks;// /* jshint indent: 2 */