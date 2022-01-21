(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});
  
  $(".grid").masonry({ itemSelector: ".grid-item" });
    
  $(".filtering").on("click", "span", function () {
      var a = $(".gallery").isotope({});
      var e = $(this).attr("data-filter");
      a.isotope({ filter: e });
  });
  $(".filtering").on("click", "span", function () {
      $(this).addClass("active").siblings().removeClass("active");
  });

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


const $element = $('.gui-animation');
const imagePath = 'images\project\Elevation\GUI_Animation\frames';
const totalFrames = 53;
const animationDuration = 883;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;

// 'step' function will be called each time browser rerender the content
// we achieve that by passing 'step' as a parameter to the 'requestAnimationFrame' function
function step(startTime) {
  // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
  // first of all we calculate how much time has passed from the last time when frame was update
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;
  
  // then we check if it is time to update the frame
  if (timeFromLastUpdate > timePerFrame) {
    // and update it accordingly
    $element.attr('src', imagePath + `/Darstellung.7.${frameNumber}.svg`);
    // reset the last update time
    timeWhenLastUpdate = startTime;
    
    // then increase the frame number or reset it if it is the last frame
    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }        
  }
  
  requestAnimationFrame(step);
}

// create a set of hidden divs
// and set their background-image attribute to required images
// that will force browser to download the images
$(document).ready(() => {
  for (var i = 1; i < totalFrames + 1; i++) {
    $('body').append(`<div id="preload-image-${i}" style="background-image: url('${imagePath}/Darstellung.7.${i}.png');"></div>`);
  }
});

// wait for images to be downloaded and start the animation
$(window).on('load', () => {
  requestAnimationFrame(step);
});
