"use strict";

var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  arrows: "#cc0000",
  pagination: true,
  perPage: 2,
  autoplay: true,
  interval: 3000,
  start: 3,
  speed: 500,
});

splide.mount();


