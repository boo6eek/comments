define(function(){

    function Comments(title, comment){
        this.title = title || 'Default name';
        this.comment = comment || 'Default name';
    }

    return Comments;
});