
var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

var filtera = document.querySelector('.filter-button-group');
filtera.on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  elem.isotope({ filter: filterValue });
});