define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        collectionsComment = require('collections/Comments'),
        viewComments = require('views/Comments'),
        formComments = require('views/CommentForm');

    var ControllerComments = Backbone.Router.extend({

        start: function () {
            var CollectionsComment = new collectionsComment();

            var FormComments = new formComments({collection: CollectionsComment});

            CollectionsComment.fetch({

                success: function () {

                    var commentsView = new viewComments({collection: CollectionsComment});

                    $('#comments-list').append(commentsView.render().el);
                }

            });

        },

        read: function () {

        }
    });


    return ControllerComments;


});