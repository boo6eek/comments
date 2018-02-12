var express = require('express');
var router = express.Router();
var moment = require('moment');
var db = require('../config/db');
var conform = require('conform');

var title = 'Коментарии';

router.get('/', function (req, res) {
    res.render('index', {title: title});
});


router.get('/comments', function (req, res) {
    db.comments().find().toArray(function (err, docs) {
        if (err)
            console.log(err);
        moment.locale('ru');


        docs.forEach(function (mjs) {
            mjs.date = moment(mjs.date).startOf('second').fromNow();
        });

        res.send(docs);
    })

});

router.post('/comments', function (req, res) {

    var comment = {
        date: moment().format(),
        title: req.body.title,
        name: req.body.name,
        comment: req.body.comment
    };

    var validate = conform.validate(comment, {
        properties: {
            title: {
                pattern: /^[a-z|A-Z|а-я|А-Я|#|\-|0-9| |,|$|!|@|%|^|&|*|(|)|+|=|_]{3,}$/,
            },
            name: {
                pattern: /^[a-z|A-Z|а-я|А-Я|#|\-|0-9| |,|$|!|@|%|^|&|*|(|)|+|=|_]{3,}$/,
            },
            comment: {
                pattern: /^[a-z|A-Z|а-я|А-Я|#|\-|0-9| |,|$|!|@|%|^|&|*|(|)|+|=|_]{3,}$/,
            }
        }
    });

    if (validate.valid) {
        db.comments().insert(comment, function (err, comments) {
            if (err)
                console.log(err);
        });
        db.comments().find().limit(1).sort({$natural:-1}).toArray(function (err, docs) {
            if (err)
                console.log(err);
            moment.locale('ru');

            docs.forEach(function (mjs) {
                mjs.date = moment(mjs.date).startOf('second').fromNow();
            });

            var data = {validate: validate.valid, docs: docs};
            res.send(data);
        });
    } else {
        res.send(validate);
    }

});

router.get('/dropdb', function (req, res) {
    db.comments().drop(function (err, docs) {
        if (err) res.send(err);
    });
    db.comments().find().toArray(function (err, comments) {
        if (err)
            console.log(err);
        console.log(comments);
        res.render('index', {title: title, comments: comments});
    });
});

module.exports = router;
