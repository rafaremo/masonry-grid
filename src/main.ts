const elem = document.querySelector('.grid');
const msnry = new Masonry( elem, {
  // options
  columnWidth: '.grid-sizer',
// do not use .grid-sizer in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: '.gutter-sizer'
});

export {}