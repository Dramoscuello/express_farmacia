$(document).ready(function() {  
  function contarMensajes(){
    var cuantosLi = 0;
    jQuery("#messages li").each(function(index){
      cuantosLi = cuantosLi + 1;
    });
    $('.chat-message-counter').text(cuantosLi);
    return cuantosLi;
  }

  $('.chat-message-counter').text(contarMensajes());

  $('#live-chat header').on('click', function() {
    $('.chat').toggleClass('toggled');
    $('.chat-message-counter').toggleClass('chat-counter-hide');
  });

  $('.chat-close').on('click', function(e) {
      e.preventDefault();
      $('#live-chat').fadeOut(300);
  });
  setInterval(contarMensajes, 3000);
});
