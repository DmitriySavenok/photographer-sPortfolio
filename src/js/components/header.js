function navigationToggle() {
	let menuButton = document.querySelector(".header__menu-button");
	let navigation = document.querySelector(".navigation");
	menuButton.addEventListener('click', function() {
		menuButton.classList.toggle('button__pressed');
		navigation.classList.toggle('navigation--opened');
		console.log('click');
	})
}

navigationToggle();
