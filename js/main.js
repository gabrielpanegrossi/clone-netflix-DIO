window.addEventListener('load', function () {
	new Glider(document.querySelector('.glider'), {
		// Mobile-first defaults
		slidesToShow: 1,
		slidesToScroll: 1,
		scrollLock: true,
		draggable: true,

		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 775,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 4,
					slidesToScroll: 1,
					itemWidth: '25%',
					duration: 0.25,
				},
			},
			{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					itemWidth: '20%',
					duration: 0.25,
				},
			},
		],
	});
});
