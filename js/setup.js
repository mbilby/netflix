$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: false,
  arrow: false,
  responsive: {
    0: {
      items: 3
    },
    600: {
      items: 5
    },
    1000: {
      items: 7
    }
  }
})