window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

		const elem = document.querySelector('.grid');
        const iso = new Isotope( elem, {
            itemSelector: '.grid__item',
            layoutMode: 'masonry',
            percentPosition: true,
            masonry: {
                // use element for option
                // columnWidth: '.grid-sizer'
            }
        });

	}, 200)

}

