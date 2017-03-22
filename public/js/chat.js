$( document ).ready(function() {
    $('.chat').slideToggle(0, 'swing');

    $('#live-chat header').on('click', function() {
        $('.chat').slideToggle(300, 'swing');
    });

    $('.chat-close').on('click', function(e) {
        e.preventDefault();
        $('#live-chat').fadeOut(300);
    });
});
