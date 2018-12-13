$(document).ready(function(){

    $('.js--skills').waypoint(function(direction){
        if(direction === 'down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },
    {
        offset: 60
    });

    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
      var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });

  $('.js--wp-1').waypoint(function(direction){  //logo
    $('.js--wp-1').addClass('animated fadeIn')
  },{
    offset: '60%'
  })
  $('.js--wp-2').waypoint(function(direction){  //logo
    $('.js--wp-2').addClass('animated fadeIn')
  },{
    offset: '60%'
  })
  $('.js--wp-3').waypoint(function(direction){  //logo
    $('.js--wp-3').addClass('animated fadeIn')
  },{
    offset: '60%'
  })
  $('.js--wp-4').waypoint(function(direction){  //logo
    $('.js--wp-4').addClass('animated fadeIn')
  },{
    offset: '60%'
  })
  $('.js--wp-5').waypoint(function(direction){ //headline
    $('.js--wp-5').addClass('animated slideInLeft')
  },{
    offset: '90%'
  })
  $('.js--wp-6').waypoint(function(direction){  //headline logo
    $('.js--wp-6').addClass('animated slideInLeft')
  },{
    offset: '50%'
  })

  $('.js--wp-7').waypoint(function (direction) { //stars
    $('.js--wp-7').addClass('animated bounceInLeft')
  }, {
      offset: '60%'
    })

  $('.js--wp-1a').waypoint(function (direction) {  //logo
    $('.js--wp-1a').addClass('animated fadeIn')
  }, {
      offset: '50%'
    })
  $('.js--wp-2a').waypoint(function (direction) {  //logo
    $('.js--wp-2a').addClass('animated fadeIn')
  }, {
      offset: '50%'
    })
  $('.js--wp-3a').waypoint(function (direction) {  //logo
    $('.js--wp-3a').addClass('animated fadeIn')
  }, {
      offset: '50%'
    })
  $('.js--wp-4a').waypoint(function (direction) {  //logo
    $('.js--wp-4a').addClass('animated fadeIn')
  }, {
      offset: '50%'
    })

  $('.js--wp-8').waypoint(function (direction) { //headline
    $('.js--wp-8').addClass('animated slideInLeft')
  }, {
      offset: '70%'
    })

  $('.js--wp-9').waypoint(function (direction) { //stars
    $('.js--wp-9').addClass('animated bounceInLeft')
  }, {
      offset: '50%'
    })

  $('.js--wp-10').waypoint(function (direction) {  //logo
    $('.js--wp-10').addClass('animated fadeIn')
  }, {
      offset: '50%'
    })

  $("#example").typer({
    
  strings: [
      
    "I am a javaScript Programmer,",
    
  ],
  typeSpeed: 60,
    
  backspaceSpeed: 20,
    
  backspaceDelay: 10000000,
    
  repeatDelay: 1000,
    
  repeat: true,
    
  autoStart: true,
    
  startDelay: 1000,
  useCursor: false


    
});

$("#example2").typer({

  strings: [

    "Deepanshu Bhasker",

  ],
  backspaceDelay: 800000000,
  useCursor: false

});


$("#example3").typer({

  strings: [

    "UI/UX Designer.",

  ],
  backspaceDelay: 8000000,
  startDelay: 3000,
  useCursor: false

});



});

