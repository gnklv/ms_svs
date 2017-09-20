$(document).ready(function() {

	$('.c-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	});

	function toggleAAccordion (event) {
		const details = $(event.target).closest('.c-accordion__item'),
					content = details.find('.c-accordion__content');

		if (details.hasClass('open')) {
			details.removeClass('open');
			content.slideUp(300);
		} else {
			details.addClass('open');
			content.slideDown(300);
		}
	}

	$('.c-accordion__heading').on('click', toggleAAccordion);

});