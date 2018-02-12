define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone');


    var viewComment = Backbone.View.extend({
        tagName: 'div',
        className: 'comments-block',
        template: '#comment-template',

        initialize: function () {
            this.render();
        },

        render: function () {
            var template = _.template( $(this.template).html() );
            this.$el.html( template( this.model.toJSON() ) );

            return this;
        }

    });



    return viewComment;

});