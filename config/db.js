var mongoClient = require("mongodb").MongoClient;

var db = false;


if (!db) {
    mongoClient.connect('mongodb://anton:qwerty@ds111608.mlab.com:11608/comments',
        function (err, client) {
            db = client.db('comments');
        });
}


exports.comments = function () {
    return db.collection('comments');
};