define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        modelComment = require('models/Comment');

    var CollectionComments = Backbone.Collection.extend({
        model: modelComment,
        url: 'comments'
    });

    return CollectionComments;

});