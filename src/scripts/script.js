let clickButton;

function navigationToggle() {
  let menuButton = document.querySelector(".header__menu-button");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector("main");
  menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('button__pressed');
    navigation.classList.toggle('navigation--opened');
    main.classList.toggle('main--navigation-opened');
    console.log(clickButton);
    console.log('click');
    if(clickButton === undefined) {
      document.querySelector('#button-all').click();
    } else {
      document.querySelector(clickButton).click();
      console.log(clickButton)
    }
  })
}

function navigationFilter() {
  const elem = document.querySelector('.portfolio__grid');
    const iso = new Isotope( elem, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry',
      percentPosition: true,
      masonry: {
        // use element for option
        // columnWidth: '.grid-sizer'
      }
    });

    document.querySelectorAll('.navigation__filter-btn').forEach(el => {
    el.addEventListener('click', (e) => {
        let filter = e.currentTarget.dataset.filter;
        clickButton = "#"+el.id;
        console.log(clickButton);
        iso.arrange({filter: `${filter}`});
      });
    });
}

window.onload = function() {

	setTimeout(function() {

    // Скрывает прелоадер после загрузки контента страницы
		document.body.classList.add('loaded')

    navigationToggle();
    navigationFilter();

	}, 200)
}
