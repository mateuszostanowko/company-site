//Technology tooltip
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('input[rel="txtTooltip"]').tooltip({
    container: 'body'
  });

// Menu underline
$('.navbar-item-1').hover(

    function(){
        $('.nav-underline-1').addClass('nav-underline-hover');
    },
    function(){
        $('.nav-underline-1').removeClass('nav-underline-hover');
    }
);
$('.navbar-item-2').hover(

    function(){
        $('.nav-underline-2').addClass('nav-underline-hover');
    },
    function(){
        $('.nav-underline-2').removeClass('nav-underline-hover');
    }
);
$('.navbar-item-3').hover(

    function(){
        $('.nav-underline-3').addClass('nav-underline-hover');
    },
    function(){
        $('.nav-underline-3').removeClass('nav-underline-hover');
    }
);
$('.navbar-item-4').hover(

    function(){
        $('.nav-underline-4').addClass('nav-underline-hover');
    },
    function(){
        $('.nav-underline-4').removeClass('nav-underline-hover');
    }
);

//Change Nav Style

$(document).scroll(function(){
    var scrollValue = $(document).scrollTop();
    var scrollSection = 700;                    // Do poprawy

    if(scrollValue>scrollSection) {
        $('.navbar').addClass('navbar-scroll');
        $('.scroll-top').addClass('d-block');
        $('.nav-img').addClass('nav-img-logo2');
    }
    else {
        $('.navbar').removeClass('navbar-scroll');
        $('.scroll-top').removeClass('d-block');
        $('.nav-img').removeClass('nav-img-logo2');
    }
});

//Active Nav Item -------------------   Nie działa :(

$(document).scroll(function(){
    var scrollValue = $(document).scrollTop();
    var section1 = $('#about-sites').offset.top;
    var section2 = $('#techology').scrollTop();
    var section3 = $('#contact').scrollTop();
    console.log('sectionOne: '+ section1);

    if(scrollValue>section1 && scrollValue<section2)   $('#nav-underline-2').addClass('nav-underline-active');
    else    $('.nav-underline-2').removeClass('nav-underline-active');

    if(scrollValue>section2 && scrollValue<section3)   $('#nav-underline-3').addClass('nav-underline-active');
    else    $('.nav-underline-3').removeClass('nav-underline-active');

    if(scrollValue>section3)   $('#nav-underline-4').addClass('nav-underline-active');
    else    $('.nav-underline-4').removeClass('nav-underline-active');
});

//Smooth Scrolling

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  //delete bootstrap atributes if window width >= 768px

  $(window).resize(function(){
      if (window.innerWidth>=768){
          $('.navbar').removeAttr('data-toggle');
          $('.navbar').removeAttr('data-target');
      }
      else if(window.innerWidth<768){
          $('.navbar').attr('data-toggle','collapse');
          $('.navbar').attr('data-target','#navbarList');
    }
  });