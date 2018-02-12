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

});