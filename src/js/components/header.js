function menuToggle() {
	let menuButton = document.querySelector(".header__menu-button");
	menuButton.addEventListener('click', function() {
		menuButton.classList.toggle('button__pressed');
		console.log('click');
	})
}

menuToggle();
