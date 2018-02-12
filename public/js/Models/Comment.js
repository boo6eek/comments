<<<<<<< HEAD
define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone');

    var ModelComment = Backbone.Model.extend({
        defaults: {
            title: 'Title',
            name: 'Anton',
            comment: 'web developer'
        },
        url: 'comments'
    });

    return ModelComment;

=======
define(function(){

    function Comments(title, comment){
        this.title = title || 'Default name';
        this.comment = comment || 'Default name';
    }

    return Comments;
>>>>>>> 662ba3abeee3b4aa453daeddcd9e98e04b4fc07f
});