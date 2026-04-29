const speakerName = document.getElementById("speakerName");
const speakerDesc = document.getElementById("speakerDesc");
const speakerPrice = document.getElementById("speakerPrice");

const soundbarName = document.getElementById("soundbarName");
const soundbarDesc = document.getElementById("soundbarDesc");
const soundbarPrice = document.getElementById("soundbarPrice");

function updateProductInfo(slideEl, nameEl, descEl, priceEl) {
  if (!slideEl) return;

  nameEl.textContent = slideEl.dataset.name;
  descEl.textContent = slideEl.dataset.desc;
  priceEl.textContent = slideEl.dataset.price;
}

const speakerSwiper = new Swiper(".speakerSwiper", {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true,
  loop: false,
  speed: 700,
  initialSlide: 3,

  pagination: {
    el: ".speaker-pagination",
    clickable: true,
  },

  breakpoints: {
    431: {
      slidesPerView: 2.4,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 10,
    },
  },

  on: {
    init: function () {
      updateProductInfo(
        this.slides[this.activeIndex],
        speakerName,
        speakerDesc,
        speakerPrice
      );
    },

    slideChange: function () {
      updateProductInfo(
        this.slides[this.activeIndex],
        speakerName,
        speakerDesc,
        speakerPrice
      );
    },

    click: function () {
      if (!this.clickedSlide) return;

      const realIndex = Number(this.clickedSlide.dataset.swiperSlideIndex);
      this.slideTo(realIndex);

      updateProductInfo(
        this.clickedSlide,
        speakerName,
        speakerDesc,
        speakerPrice
      );
    },
  },
});

const soundbarSwiper = new Swiper(".soundbarSwiper", {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true,
  loop: false,
  speed: 700,
  initialSlide: 3,

  pagination: {
    el: ".soundbar-pagination",
    clickable: true,
  },

  breakpoints: {
    431: {
      slidesPerView: 2.4,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 10,
    },
  },

  on: {
    init: function () {
      updateProductInfo(
        this.slides[this.activeIndex],
        soundbarName,
        soundbarDesc,
        soundbarPrice
      );
    },

    slideChange: function () {
      updateProductInfo(
        this.slides[this.activeIndex],
        soundbarName,
        soundbarDesc,
        soundbarPrice
      );
    },

    click: function () {
      if (!this.clickedSlide) return;

      const realIndex = Number(this.clickedSlide.dataset.swiperSlideIndex);
      this.slideTo(realIndex);

      updateProductInfo(
        this.clickedSlide,
        soundbarName,
        soundbarDesc,
        soundbarPrice
      );
    },
  },
});