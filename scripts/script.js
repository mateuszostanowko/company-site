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

//Scroll Top
