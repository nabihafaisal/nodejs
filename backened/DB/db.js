const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.mongo_url);
        console.log('db connected');
    } catch (error) {
        console.log('db connection error', error);
    }
};

module.exports = { db };
