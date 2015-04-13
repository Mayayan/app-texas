$(document).ready(function() {
    $('.boxes').on('click', '.box', function(){
        $('.box').removeClass('red');
        $(this).addClass('red');
    });
});