import mongoose from 'mongoose';
import config from './config.json' assert { type: "json" };

mongoose.connect(config.mongoDB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection To Data Base");
});

export default db;