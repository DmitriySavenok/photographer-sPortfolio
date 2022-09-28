function setHeaderPageTitle() {
  let pageTitle = document.querySelector('.body');

  if(pageTitle.classList.contains('index-page')) {
    console.log('Портфолио')
    document.querySelector('.header__page-title').innerHTML = 'Портфолио';
    document.querySelector(clickButton).click();
  } else if(pageTitle.classList.contains('price-page')) {
    console.log('Прайс')
    document.querySelector('.header__page-title').innerHTML = 'Прайс';
  }
}

function navigationToggle() {
  let menuButton = document.querySelector(".header__menu-button");
  let navigation = document.querySelector(".navigation");
  let main = document.querySelector("main");
  clickButton = localStorage.getItem('filterFocus');
  menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('button__pressed');
    navigation.classList.toggle('navigation--opened');
    main.classList.toggle('main--navigation-opened');
    console.log(clickButton);
    console.log('click');
    let pageTitle = document.querySelector('.body');
    if(pageTitle.classList.contains('index-page')) {
      if(clickButton === undefined) {
        clickButton = localStorage.getItem('filterFocus');
        document.querySelector('#button-all').click();
      } else {
        document.querySelector(clickButton).click();
        console.log(clickButton)
      }
    }
  })
}
