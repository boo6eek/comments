$(function (e) {
    $('form').submit(function (e) {
        e.preventDefault();
        var data = {
            name: $(this).find('input[name=name]').val(),
            comment: $(this).find('textarea[name=comment]').val()
        };
        var form = $(this);
        $.ajax({
            url: '/add',
            type: 'post',
            data: data,
            success: function (data) {
                $('.comments-block').load('/ .comments-block > *');
                form[0].reset();
            }
        })
    });
    $('.dropdb').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: '/dropdb',
            success: function (data) {
                $('.comments-block').load('/ .comments-block > *');
            }
        })
    });
    setInterval(function () {
        $.ajax({
            url: '/',
            success: function (data) {
                $('.comments-block').load('/ .comments-block > *');
            }
        })
    }, 1000)
});