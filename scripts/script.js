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

//Smooth Scrolling

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
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

  $(document).ready(function(){
    if (window.innerWidth>=768){
        $('.navbar').removeAttr('data-toggle');
        $('.navbar').removeAttr('data-target');
    }
    else if(window.innerWidth<768){
        $('.navbar').attr('data-toggle','collapse');
        $('.navbar').attr('data-target','#navbarList');
  }
});

    //about projects animation
$(document).scroll(function(){
    if ($(document).scrollTop()>=300){
        $('.aboutTitle').addClass('about-projects-title');
    }
    else    $('.aboutTitle').removeClass('about-projects-title');
});