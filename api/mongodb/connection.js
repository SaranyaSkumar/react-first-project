const mongoose = require('mongoose');
const config= require('../../config/config')

const URI= config.dbconfig;

const connectDb =async () => {
    await mongoose.connect(URI,{ useNewUrlParser: true });
    console.log("mongo db connected");
}

module.exports= connectDb;