const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is already running');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        _db = client;
        callback(null, _db);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db not running');
    }
    return _db;
};

module.exports = {initDb, getDb,};