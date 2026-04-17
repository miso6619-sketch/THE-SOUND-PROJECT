const itemName = document.getElementById("itemName");
const itemDesc = document.getElementById("itemDesc");
const itemPrice = document.getElementById("itemPrice");

const slides = document.querySelectorAll("#headsets-visual .swiper-slide");

function updateProductInfoByIndex(index) {
  const slideEl = slides[index];
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
      slidesPerView: 6.2,
      spaceBetween: 10,
    }
  },
  on: {
    init: function () {
      updateProductInfoByIndex(this.activeIndex);
    },
    slideChange: function () {
      updateProductInfoByIndex(this.activeIndex);
    }
  }
});

slides.forEach((slide, index) => {
  slide.addEventListener("click", function () {
    headsetSwiper.slideTo(index);
    updateProductInfoByIndex(index);
  });
});