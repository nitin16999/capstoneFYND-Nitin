const constInfo = require('../const.info');
const mongoose = require('mongoose');

const url = constInfo.constInfo.mongoDB.mongoURL;

const conn = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Connection Error: '));
  db.once('open', () => {
    console.log('Connected! to DB');
  });
  return db;
};
module.exports = conn;
