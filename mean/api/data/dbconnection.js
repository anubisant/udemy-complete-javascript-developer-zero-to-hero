//Lets hook up to the database

var MongoClient = require('mongodb').MongoClient;

var dburl = 'mongodb://localhost:27017/meanhotel';

var _connection = null

var open = function() {
    // set _connection
    MongoClient.connect(dburl, function(err, db){
        if(err) {
            console.log("DB connection Failed!!")
            return
        }
        else {
            _connection = db
            console.log("DB connection open", db)
        }
    })
}

var get = function() {
    return _connection;
}

module.exports = {
    open : open,
    get : get
}