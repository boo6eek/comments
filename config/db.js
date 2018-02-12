<<<<<<< HEAD
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
=======
module.exports = { url : 'mongodb://anton:qwerty@ds111608.mlab.com:11608/comments'};
>>>>>>> 662ba3abeee3b4aa453daeddcd9e98e04b4fc07f
