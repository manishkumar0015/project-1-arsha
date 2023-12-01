// window.addEventListener('load', () => {
//   let portfolioContainer = select('.portfolio-container');
//   if (portfolioContainer) {
//     let portfolioIsotope = new Isotope(portfolioContainer, {
//       itemSelector: '.portfolio_item'
//     });

//     let portfolioFilters = select('#portfolio-flters li', true);

//     on('click', '#portfolio-flters li', function(e) {
//       e.preventDefault();
//       portfolioFilters.forEach(function(el) {
//         el.classList.remove('filter-active');
//       });
//       this.classList.add('filter-active');

//       portfolioIsotope.arrange({
//         filter: this.getAttribute('data-filter')
//       });
//       portfolioIsotope.on('arrangeComplete', function() {
//         AOS.refresh()
//       });
//     }, true);
//   }

// });

// Navbar Script For Toggle Bar -- Harshil

(function () {
  on('click', '.mobile-nav-toggle', function(e) {
    select('#nav_links').classList.toggle('navbar-mobile')
    this.classList.toggle('fa-bars')
    this.classList.toggle('fa-xmark')
  })
});
