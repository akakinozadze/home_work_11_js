"use strict";

const splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  arrows: true,
  pagination: true,
  perPage: 2,
  autoplay: true,
  interval: 3000,
  start: 3,
  speed: 500,
  classes: {
    pagination: "splide__pagination akaki1",
    page: "splide__pagination__page akaki2",
  },
});

splide.mount()

