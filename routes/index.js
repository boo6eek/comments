var express = require('express');
var router = express.Router();
var moment = require('moment');
var db = require('../config/db');

var mongoose = require('mongoose');

mongoose.connect(db.url);
var db = mongoose.connection;
var objectId = require('mongodb').ObjectId;

var title = 'Коментарии';

var collection = db.collection('comments');


router.get('/', function (req, res) {
    collection.find().toArray(function (err, docs) {
        if (err)
            console.log(err);
        moment.lang('ru');


        docs.forEach(function (mjs) {
            mjs.date = moment(mjs.date).startOf('second').fromNow();
        });

        res.render('index', {title: title, comments: docs});
    })

});

router.post('/add', function (req, res) {
    var comment = {
        date: moment().format(),
        name: req.body.name,
        text: req.body.comment
    };

    collection.insert(comment, function (err, comments) {
        if (err)
            console.log(err);
        console.log(comments);
    });
    collection.find().toArray(function (err, comments) {
        if (err)
            console.log(err);
        console.log(comments);
        res.render('index', {title: title, comments: comments});
    });
});

router.get('/dropdb', function (req, res) {
    collection.drop(function (err, docs) {
        if (err) res.send(err);
    });
    collection.find().toArray(function (err, comments) {
        if (err)
            console.log(err);
        console.log(comments);
        res.render('index', {title: title, comments: comments});
    });
});

module.exports = router;
