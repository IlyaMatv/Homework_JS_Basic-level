$(window).on('scroll', function() {
  
  
var scroll = $(window).scrollTop(); 
if (scroll >= 150) {    

  $('.second-head').css({"top": "0"}); 
  } else {
    $('.second-head').css({"top": "-55px"}); 
  }; 


});

$('.slider .wrap').slick();