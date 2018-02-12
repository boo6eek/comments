define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        backbone = require('backbone'),
        modelComment = require('models/Comment');

    var CommentsForm = Backbone.View.extend({
        el: '#comment-form',

        initialize: function () {
            var self = this;
            var form = this.el;

            var ModelComment = new modelComment();

            this.model = ModelComment;

            $(form).submit(function (e) {
                e.preventDefault();


                var name = $(this).find('input[name=name]').val(),
                    comment = $(this).find('textarea[name=comment]').val(),
                    title = $(this).find('input[name=title]').val();

                ModelComment.set({name: name});
                ModelComment.set({title: title});
                ModelComment.set({comment: comment});

                ModelComment.save(null, {
                    success: function (model, res, op) {
                        if (self.validate(model, res)) {
                            form.reset();
                        };
                    },
                    error: function (model, xhr, op) {
                        console.log(xhr);
                    }
                });

            });

        },

        validate : function (model, res) {
            if (res.validate) {
                this.collection.add(res.docs);
            }
            return true;
        },

        render: function () {

        }

    });


    return CommentsForm;

});