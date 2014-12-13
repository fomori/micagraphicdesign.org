
/* search bar */

$(document).ready(function () {

	var searchclicked = false;
	
	$('body').on('click', '.search-img img',function(event){
		event.stopPropagation();
		$(this).parent().toggleClass('show-input');
	})
	
	$('.search-img').on('click', function() {

	});

    $('.menu li').change(function () {
        if (!this.checked) 
        //  ^
           $('#autoUpdate').fadeIn('slow');
        else 
            $('#autoUpdate').fadeOut('slow');
    });
});

/* main navigation */

var $toggler = $('.navigation.menus > strong');

$toggler.on('click', function () {
  $(this).toggleClass('active');
});

$('.navigation.menus > .menu').on('mouseleave', function () {
  $toggler.removeClass('active');
});

/* gd blur */

$(".gd").hover(function() { $(this).animate({textShadow: "#aaa 0 0 0"}); }, function() { $(this).animate({textShadow: "#aaa 0 0 10px"}); });



/*
$('main.page').waypoint(function(direction) {

  if (direction === 'down') {
      $('body').addClass('scrollDown');    
          $('body').removeClass('scrollUp');
  } else {
      
      $('body').removeClass('scrollDown');
      $('body').addClass('scrollUp');
  }
});

$('.formats.menus.segment').waypoint(function(direction){
	if (direction === 'down') {
		$('.masthead').addClass('has-border');
	} else {
		$('.masthead').removeClass('has-border');
	}
},{
	offset: 70
});
*/