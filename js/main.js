(function ($) {
"use strict";



// preloader
setTimeout(function(){
    $('.preloader').fadeToggle();
  });


// side-bar
$('.side-bar').click(function() {
	$('.side-nav').addClass('side-nav-show');
})

$('.side-nav-close,a').click(function() {
	$('.side-nav').removeClass('side-nav-show');
})

  



// smoorth scrolling
var scrollLink = $('.scroll');
  
// Smooth scrolling
scrollLink.click(function(e) {
  e.preventDefault();
  $('body,html').animate({
	scrollTop: $(this.hash).offset().top
  }, 1000 );
});




})(jQuery);