console.log('js settled')

new Splide('.splide', {
  fixedHeight: '200px',
  perPage: 3,
  perMove: 1,
  speed: 1000,
  gap: '2rem',
  pagination: false,
  padding: {
    right: '50px',
  },
  breakpoints: {
    1223: {
      perPage: 2,
    },
    495: {
      perPage: 1,
    }
  }
}).mount()
