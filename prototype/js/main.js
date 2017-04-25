$(document).ready(function() {

  /* menu animations */
  $('#menu_icon').click(function () {

    $(this).toggleClass('open');

    if($(this).hasClass('open')) {
      $('.menu-overlay').height('100%');
    } else {
      $('.menu-overlay').css({overflow: 'hidden'});
      $('.menu-overlay').height('0');
    }
  });

  $(".menu-overlay").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
    if($('#menu_icon').hasClass('open')) {
      $(this).css({overflowY: 'auto'});
    }
  });

  // img show effects
 
  $("img").one("load", function() {
    $(this).css({opacity: 1});
  }).each(function() {
    if(this.complete) $(this).load();
  });

});
