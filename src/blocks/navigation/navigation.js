function navigationFilter() {
  let filter = '*';

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
        filter = e.currentTarget.dataset.filter;
        console.log(filter);


        document.querySelectorAll('.gallery-photo').forEach(el => {
          if (filter === '*') {
            el.dataset.fancybox = 'gallery';
          } else if (filter === '.vertical') {
            document.querySelectorAll('.vert').forEach(vert => {
              vert.dataset.fancybox = 'vertical';
            })
          } else if (filter === '.horizontal') {
            document.querySelectorAll('.horiz').forEach(horz => {
              horz.dataset.fancybox = 'horizontal';
            })
          }
        })


        // записываем в переменную id нажатой кнопки
        clickButton = "#"+el.id;
        localStorage.setItem('filterFocus', clickButton);
        // console.log(clickButton);
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
