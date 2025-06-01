$(document).ready(function () {
  $("#owl-carousel").owlCarousel({
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    smartSpeed: 450,
    dots: false, // Hide dots if not already set
  });
});
