<<<<<<< HEAD
requirejs.config({
    baseUrl: "/js/libs",
    paths: {
        jquery: 'jquery-3.3.1.min',
        backbone: 'backbone',
        moment: 'moment/moment',
        underscore: 'underscore',
        collections: '../Collections',
        controllers: '../Controllers',
        models: '../Models',
        views: '../Views'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        }

    },
    packages: [{
        name: 'moment',
        location: 'moment',
        main: 'moment'
    }]


});

require(['controllers/Comment'],
    function (controllersComment) {

        new controllersComment().start();

    });
=======
require(['libs/jquery-3.3.1.min']);
require(['libs/common']);
require(['libs/moment']);
require(['Models/Comment'], function(Comment){

    var comments = [new Comment('Barney', 'asdasdasdasd'),
        new Comment('Cartman', 'asdasdasdasd'),
        new Comment('Sheldon', 'asdasdasdasd')];

    for (var i = 0, len = comments.length; i < len; i++){
        console.log(comments[i].title + " - " + comments[i].comment);
    }

    localStorage.comments = JSON.stringify(comments);
});
>>>>>>> 662ba3abeee3b4aa453daeddcd9e98e04b4fc07f
