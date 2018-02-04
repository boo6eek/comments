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