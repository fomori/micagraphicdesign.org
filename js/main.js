$('.search-img').on('click', function() {
	$(this).toggleClass('show-input');
});


$(document).ready(function () {
    $('.menu li').change(function () {
        if (!this.checked) 
        //  ^
           $('#autoUpdate').fadeIn('slow');
        else 
            $('#autoUpdate').fadeOut('slow');
    });
});


var $toggler = $('.navigation.menus > strong');

$toggler.on('click', function () {
  $(this).toggleClass('active');
});

$('.navigation.menus > .menu').on('mouseleave', function () {
  $toggler.removeClass('active');
});