$(document).ready(function() {

    $('#live-chat header').on('click', function() {
      $('.chat').toggleClass('toggled');
      $('.chat-message-counter').toggleClass('chat-counter-hide');
      //$('.chat-message-counter').fadeToggle(300, 'swing');
    });

    $('.chat-close').on('click', function(e) {
        e.preventDefault();
        $('#live-chat').fadeOut(300);
    });
});
