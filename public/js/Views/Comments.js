define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        viewComment = require('views/Comment');

    var CommentsView = Backbone.View.extend({
        tagName: 'div',

        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        addOne: function (model) {

            var commentView = new viewComment({model: model});
            this.$el.append(commentView.render().el);

        },

        render: function() {
            this.collection.each(function(model) {
                var ViewComment = new viewComment({model: model});
                this.$el.append(ViewComment.render().el);
            }, this);

            return this;
        }

    });


    return CommentsView;

});