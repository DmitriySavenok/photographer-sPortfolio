function navigationFilter() {
  const elem = document.querySelector('.portfolio__grid');
  const iso = new Isotope( elem, {
    itemSelector: '.grid-item',
    layoutMode: 'masonry',
    percentPosition: true
  });

  // Фильтр фотографий на странице портфолио
  let pageTitle = document.querySelector('.body');
  if(pageTitle.classList.contains('index-page')) {
    document.querySelectorAll('.navigation__filter-btn').forEach(el => {
    el.addEventListener('click', (e) => {
        let filter = e.currentTarget.dataset.filter;
        clickButton = "#"+el.id;
        localStorage.setItem('filterFocus', clickButton);
        console.log(clickButton);
        iso.arrange({filter: `${filter}`});
      });
    });
  } else {
    document.querySelectorAll('.navigation__filter-btn').forEach(el => {
      el.addEventListener('click', (e) => {
          window.location.href = 'index.html';
          clickButton = "#"+el.id;
          localStorage.setItem('filterFocus', clickButton);
        });
      });
  }
}
