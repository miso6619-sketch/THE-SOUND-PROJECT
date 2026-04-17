const speakerName = document.getElementById("speakerName");
const speakerDesc = document.getElementById("speakerDesc");
const speakerPrice = document.getElementById("speakerPrice");

const soundbarName = document.getElementById("soundbarName");
const soundbarDesc = document.getElementById("soundbarDesc");
const soundbarPrice = document.getElementById("soundbarPrice");

const speakerSlides = document.querySelectorAll("#sp-speaker .swiper-slide");
const soundbarSlides = document.querySelectorAll("#sp-soundbar .swiper-slide");

function updateSpeakerInfoByIndex(index) {
  const slideEl = speakerSlides[index];
  if (!slideEl) return;

  speakerName.textContent = slideEl.dataset.name;
  speakerDesc.textContent = slideEl.dataset.desc;
  speakerPrice.textContent = slideEl.dataset.price;
}

function updateSoundbarInfoByIndex(index) {
  const slideEl = soundbarSlides[index];
  if (!slideEl) return;

  soundbarName.textContent = slideEl.dataset.name;
  soundbarDesc.textContent = slideEl.dataset.desc;
  soundbarPrice.textContent = slideEl.dataset.price;
}

const speakerSwiper = new Swiper(".speakerSwiper", {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true,
  loop: false,
  speed: 700,
  initialSlide: 3,
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
      updateSpeakerInfoByIndex(this.activeIndex);
    },
    slideChange: function () {
      updateSpeakerInfoByIndex(this.activeIndex);
    }
  }
});

const soundbarSwiper = new Swiper(".soundbarSwiper", {
  slidesPerView: 1.6,
  spaceBetween: 10,
  centeredSlides: true,
  loop: false,
  speed: 700,
  initialSlide: 3,
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
      updateSoundbarInfoByIndex(this.activeIndex);
    },
    slideChange: function () {
      updateSoundbarInfoByIndex(this.activeIndex);
    }
  }
});

speakerSlides.forEach((slide, index) => {
  slide.addEventListener("click", function () {
    speakerSwiper.slideTo(index);
    updateSpeakerInfoByIndex(index);
  });
});

soundbarSlides.forEach((slide, index) => {
  slide.addEventListener("click", function () {
    soundbarSwiper.slideTo(index);
    updateSoundbarInfoByIndex(index);
  });
});