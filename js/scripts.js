$(document).ready(function() {

	$thumbnail = $('.gallery__image');
	$modal = $('.modal');
	$modal_image = $('.modal__image');
	$modal_close = $('.modal-close');
	$next_button = $('.next-button');
	$prev_button = $('.prev-button');
	$button = $('.filter-button');

	$thumbnail.click(function() {

		$current_img = $(this);
		img_src = $(this).attr('src');

		$modal_image.attr('src', img_src);
		$modal.addClass('modal--open');

	});

	$modal_close.click(function() {
		$modal.removeClass('modal--open');
		$modal_image.attr('src', '');
	});

// init Isotope
var $gallery = $('.gallery').isotope({
	// options
  });
  // filter items on button click
  $('.container').on( 'click', 'button', function() {

	var filterValue = $(this).attr('data-filter');
	$gallery.isotope({ filter: filterValue });

	$button.removeClass('active');
	$(this).addClass('active');
  });

// code to change background, but it didn't look good sooo it's in about me! :-)
//   window.addEventListener("keydown", function(keypressed){
// 	if([37, 39].indexOf(keypressed.keyCode) > -1){
// 		keypressed.preventDefault();

// 		if(keypressed.keyCode == 37){
// 			$("#pic1").css({"background-color" : "#C5E9EA" })
// 		} else if(keypressed.keyCode == 39){
// 			$("#pic1").css({"background-color" : "yellow" })
// 		}
// 	}
// })
});