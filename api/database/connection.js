const Sequelize = require('sequelize');
let pgconfig={
    database: 'react-tasks',
    user: 'test',
    password: 'test1',
    host: 'localhost',
    dialect: 'postgresql'
};

const sequelize = new Sequelize(pgconfig.database, pgconfig.user, pgconfig.password, {
    host: pgconfig.host,
    dialect: pgconfig.dialect,
    define: {
        timestamps: false
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
module.exports = sequelize;