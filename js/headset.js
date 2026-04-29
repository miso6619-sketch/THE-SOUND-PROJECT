const itemName = document.getElementById("itemName");
const itemDesc = document.getElementById("itemDesc");
const itemPrice = document.getElementById("itemPrice");

function updateProductInfo(slideEl) {
  if (!slideEl) return;

  itemName.textContent = slideEl.dataset.name;
  itemDesc.textContent = slideEl.dataset.desc;
  itemPrice.textContent = slideEl.dataset.price;
}

const headsetSwiper = new Swiper(".headsetSwiper", {
  slidesPerView: 1.6,
  spaceBetween: 6,
  centeredSlides: true,
  loop: false,
  speed: 700,
  initialSlide: 5,

  pagination: {
    el: ".headset-pagination",
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
      updateProductInfo(this.slides[this.activeIndex]);
    },

    slideChange: function () {
      updateProductInfo(this.slides[this.activeIndex]);
    },

    click: function () {
      if (!this.clickedSlide) return;

      const realIndex = Number(this.clickedSlide.dataset.swiperSlideIndex);
      this.slideTo(realIndex);
      updateProductInfo(this.clickedSlide);
    },
  },
});