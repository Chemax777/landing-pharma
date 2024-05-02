const burger = document.querySelector(".burger");
const overlay = document.querySelector(".aside-overlay");
const closeMobileBtn = document.querySelector(".close-mobile");
const selectLang = document.querySelector(".select_lang");
const [...itemsMobile] = document.querySelectorAll(".nav__item-mobile");
const orderBtnMobile = document.querySelector(".header__order-btn-mobile");
const openFormBtn = document.querySelector(".corner-action__order-btn");
const closeFormBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal-wrapper");
const modalWrapper = document.querySelector(".modal-wrapper");
const countersForm = document.querySelectorAll(".counter");

const allTelsInput = document.querySelectorAll(".tel");
const allEmailInput = document.querySelectorAll(".mail-inp");
const getOrderBtns = document.querySelectorAll(".get-order-btn");
const swiperSection = document.querySelector(".swiper__section");
const accordBtns = document.querySelectorAll(".acc-head");
const selectMainOrder = document.querySelector("#select-main-bottom");
// const selectBannerFormMed = document.querySelector("#select-banner-form-med");
// const selectBannerFormDose = document.querySelector("#select-banner-form-dose");
// const counterOrderSection = document.querySelector(".counter-order");
// const orderOptions = document.querySelectorAll(".order-option");
const feedbackBtn = document.querySelector(".review-btn");
const modalComment = document.querySelector(".modal__comment");
const closeCommentModalBtn = document.querySelector(".close-comment-modal");
const closeBottomSection = document.querySelector(".close-corner-order");

let validation = {
  email: false,
  tel: false,
  prep: false,
};

const openMobileNav = () => {
  const mobileNav = document.querySelector(".header__nav-mobile");
  const overlay = document.querySelector(".aside-overlay");
  const body = document.querySelector("body");

  mobileNav.classList.toggle("open-mobile-nav");
  overlay.classList.add("open-overlay");
  body.classList.toggle("scroll-lock");
};

const closeMobileNav = () => {
  const mobileNav = document.querySelector(".header__nav-mobile");
  const overlay = document.querySelector(".aside-overlay");
  const body = document.querySelector("body");

  mobileNav.classList.remove("open-mobile-nav");
  overlay.classList.remove("open-overlay");
  body.classList.toggle("scroll-lock");
};

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

if (selectMainOrder) {
  const select1 = new ItcCustomSelect("#select-main-bottom");
}

itemsMobile.forEach((item) => item.addEventListener("click", closeMobileNav));
if (orderBtnMobile) {
  orderBtnMobile.addEventListener("click", closeMobileNav);
}

burger.addEventListener("click", openMobileNav);
closeMobileBtn.addEventListener("click", closeMobileNav);
overlay.addEventListener("click", closeMobileNav);

if (selectLang) {
  const btn = selectLang.querySelector(".btn_lang");

  const toggleList = () => {
    selectLang.classList.toggle("_active");
  };

  const closeList = () => {
    if (selectLang.classList.contains("_active"))
      selectLang.classList.remove("_active");
  };

  btn.addEventListener("click", toggleList);
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".select_lang")) closeList();
  });
}

window.addEventListener("scroll", () => {
  const goTop = document.querySelector(".go-top");
  if (window.scrollY > 80) {
    goTop.classList.add("go-top-visible");
  } else {
    goTop.classList.remove("go-top-visible");
  }
});

if (openFormBtn) {
  openFormBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    modal.classList.toggle("open-modal");
    body.classList.toggle("scroll-lock");
  });
}
if (closeFormBtn) {
  closeFormBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    modal.classList.toggle("open-modal");
    body.classList.remove("scroll-lock");
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-wrapper")) {
      const body = document.querySelector("body");
      modal.classList.toggle("open-modal");
      body.classList.remove("scroll-lock");
    }
  });
}
let counterNumber = 1;
let currentPrice = 49.49;
let totalPrice = document.querySelectorAll(".total-number");

//main page selects
const bannerSelectFormMed = document.querySelector("#select-banner-form-med");
const bannerSelectFormDose = document.querySelector("#select-banner-form-dose");
if (bannerSelectFormMed && bannerSelectFormDose) {
  const selectMed = new ItcCustomSelect("#select-banner-form-med");
  const selectDose = new ItcCustomSelect("#select-banner-form-dose");
  bannerSelectFormMed.addEventListener("click", (e) => {
    let [...allDoseElem] = bannerSelectFormDose.querySelectorAll(
      ".itc-select__option"
    );
    const toggleDose = bannerSelectFormDose.querySelector(
      ".itc-select__toggle"
    );
    if (!e.target.classList.contains("itc-select__option")) return;
    bannerSelectFormDose.querySelector(".itc-select__toggle").disabled = false;
    allDoseElem.forEach((el) => el.classList.remove("hide-option"));
    allDoseElem
      .filter((el) => e.target.dataset.value !== el.dataset.prep)
      .forEach((el) => el.classList.add("hide-option"));
    toggleDose.textContent = "Выбрать дозировку";
    validation.prep = false;
  });

  bannerSelectFormDose.addEventListener("click", (e) => {
    if (!e.target.classList.contains("itc-select__option")) return;
    currentPrice = e.target.dataset.price;
    totalPrice.forEach(
      (el) => (el.textContent = (currentPrice * counterNumber).toFixed(2))
    );
    validation.prep = true;
  });
}

//popup selects
const bannerSelectFormMedPop = document.querySelector(
  "#select-banner-form-med-popup"
);
const bannerSelectFormDosePop = document.querySelector(
  "#select-banner-form-dose-popup"
);
if (bannerSelectFormMedPop && bannerSelectFormDosePop) {
  const selectMed = new ItcCustomSelect("#select-banner-form-med-popup");
  const selectDose = new ItcCustomSelect("#select-banner-form-dose-popup");
  bannerSelectFormMedPop.addEventListener("click", (e) => {
    let [...allDoseElem] = bannerSelectFormDosePop.querySelectorAll(
      ".itc-select__option"
    );
    const toggleDose = bannerSelectFormDosePop.querySelector(
      ".itc-select__toggle"
    );
    if (!e.target.classList.contains("itc-select__option")) return;
    bannerSelectFormDosePop.querySelector(
      ".itc-select__toggle"
    ).disabled = false;
    allDoseElem.forEach((el) => el.classList.remove("hide-option"));
    allDoseElem
      .filter((el) => e.target.dataset.value !== el.dataset.prep)
      .forEach((el) => el.classList.add("hide-option"));
    toggleDose.textContent = "Выбрать дозировку";
    validation.prep = false;
  });

  bannerSelectFormDosePop.addEventListener("click", (e) => {
    if (!e.target.classList.contains("itc-select__option")) return;
    currentPrice = e.target.dataset.price;
    totalPrice.forEach(
      (el) => (el.textContent = (currentPrice * counterNumber).toFixed(2))
    );
    validation.prep = true;
  });
}
//Main page bottom
const bannerSelectFormMedBottom = document.querySelector(
  "#select-banner-form-med-bottom-main"
);
const bannerSelectFormDoseBottom = document.querySelector(
  "#select-banner-form-dose-bottom-main"
);
if (bannerSelectFormMedBottom && bannerSelectFormDoseBottom) {
  const selectMed = new ItcCustomSelect("#select-banner-form-med-bottom-main");
  const selectDose = new ItcCustomSelect(
    "#select-banner-form-dose-bottom-main"
  );
  bannerSelectFormMedBottom.addEventListener("click", (e) => {
    let [...allDoseElem] = bannerSelectFormDoseBottom.querySelectorAll(
      ".itc-select__option"
    );
    const toggleDose = bannerSelectFormDoseBottom.querySelector(
      ".itc-select__toggle"
    );
    if (!e.target.classList.contains("itc-select__option")) return;
    bannerSelectFormDoseBottom.querySelector(
      ".itc-select__toggle"
    ).disabled = false;
    allDoseElem.forEach((el) => el.classList.remove("hide-option"));
    allDoseElem
      .filter((el) => e.target.dataset.value !== el.dataset.prep)
      .forEach((el) => el.classList.add("hide-option"));
    toggleDose.textContent = "Выбрать дозировку";
    validation.prep = false;
  });

  bannerSelectFormDoseBottom.addEventListener("click", (e) => {
    if (!e.target.classList.contains("itc-select__option")) return;
    currentPrice = e.target.dataset.price;
    totalPrice.forEach(
      (el) => (el.textContent = (currentPrice * counterNumber).toFixed(2))
    );
    validation.prep = true;
  });
}

countersForm.forEach((counter) => {
  counter.addEventListener("click", (e) => {
    e.preventDefault();
    const valueInputs = document.querySelectorAll(".counter-value");
    const price = currentPrice;
    const culcPrice = (quantity, price) => {
      return quantity * price;
    };
    if (e.target.closest(".counter-plus")) {
      ++counterNumber;
      valueInputs.forEach((input) => {
        input.innerText = counterNumber;
      });
      totalPrice.forEach((totalEl) => {
        totalEl.innerText = culcPrice(counterNumber, price).toFixed(2);
      });
    }
    if (e.target.closest(".counter-minus")) {
      if (counterNumber <= 1) return;
      --counterNumber;
      valueInputs.forEach((input) => {
        input.innerText = counterNumber;
      });
      totalPrice.forEach((totalEl) => {
        totalEl.innerText = culcPrice(counterNumber, price).toFixed(2);
      });
    }
  });
});

// window.addEventListener("DOMContentLoaded", function () {
//   [].forEach.call(document.querySelectorAll(".tel"), function (input) {
//     var keyCode;
//     function mask(event) {
//       event.keyCode && (keyCode = event.keyCode);
//       var pos = this.selectionStart;
//       if (pos < 3) event.preventDefault();
//       var matrix = "+38 (___)-___-__-__",
//         i = 0,
//         def = matrix.replace(/\D/g, ""),
//         val = this.value.replace(/\D/g, ""),
//         new_value = matrix.replace(/[_\d]/g, function (a) {
//           return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
//         });
//       i = new_value.indexOf("_");
//       if (i != -1) {
//         i < 5 && (i = 3);
//         new_value = new_value.slice(0, i);
//       }
//       var reg = matrix
//         .substr(0, this.value.length)
//         .replace(/_+/g, function (a) {
//           return "\\d{1," + a.length + "}";
//         })
//         .replace(/[+()]/g, "\\$&");
//       reg = new RegExp("^" + reg + "$");
//       if (
//         !reg.test(this.value) ||
//         this.value.length < 5 ||
//         (keyCode > 47 && keyCode < 58)
//       )
//         this.value = new_value;
//       if (event.type == "blur" && this.value.length < 5) this.value = "";
//     }

//     input.addEventListener("input", mask, false);
//     input.addEventListener("focus", mask, false);
//     input.addEventListener("blur", mask, false);
//     input.addEventListener("keydown", mask, false);
//   });
// });

// allTelsInput.forEach((telInput) => {
//   telInput.addEventListener("blur", (e) => {
//     if (e.target.value.length < 19) {
//       e.target.parentElement.classList.add("warning-input");
//       validation.tel = false;
//     } else {
//       e.target.parentElement.classList.remove("warning-input");
//       validation.tel = true;
//     }
//   });
// });

allEmailInput.forEach((emailInput) => {
  emailInput.addEventListener("blur", (e) => {
    if (!validateEmail(e.target.value)) {
      e.target.parentElement.classList.add("warning-input");
      validation.email = false;
    } else {
      e.target.parentElement.classList.remove("warning-input");
      validation.email = true;
    }
  });
});
// getOrderBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (validation.email && validation.tel) {
//       alert("Спасибо за заказ!");
//     } else {
//       alert("Проверьте данные!");
//     }
//   });
// });

getOrderBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validation.prep) {
      alert("Спасибо за заказ!");
    } else {
      alert("Выберите дозировку!");
    }
  });
});

if (swiperSection) {
  const swiperButtonNext = swiperSection.querySelector(".swiper-button-next");
  const swiperButtonPrev = swiperSection.querySelector(".swiper-button-prev");
  const swiper = new Swiper(swiperSection, {
    loop: true,
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if (accordBtns) {
  accordBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("acc-head")) {
        e.target.parentElement.classList.toggle("_active");
      } else if (e.target.classList.contains("acc-title")) {
        e.target.parentElement.parentElement.classList.toggle("_active");
      } else {
        e.target.parentElement.parentElement.parentElement.classList.toggle(
          "_active"
        );
      }
    });
  });
}
// if (counterOrderSection) {
//   counterOrderSection.addEventListener("click", (e) => {
//     const totalPrice = document.querySelector(".order__price-number");
//     let culc;
//     if (
//       e.target.closest(".counter-plus") ||
//       e.target.closest(".counter-minus")
//     ) {
//       culc = currentPrice * counterNumber;
//       totalPrice.textContent = culc.toFixed(2);
//     }
//   });
// }
// if (orderOptions) {
//   orderOptions.forEach((option) => {
//     option.addEventListener("click", (e) => {
//       const totalPrice = document.querySelector(".order__price-number");
//       let culc;
//       currentPrice = e.target.dataset.price;
//       culc = currentPrice * counterNumber;
//       totalPrice.textContent = culc.toFixed(2);
//     });
//   });
// }

if (feedbackBtn) {
  feedbackBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    modalComment.classList.add("show-modal-comment");
    body.classList.toggle("scroll-lock");
  });
}
if (modalComment) {
  modalComment.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal__comment")) {
      const body = document.querySelector("body");
      body.classList.toggle("scroll-lock");
      modalComment.classList.remove("show-modal-comment");
    }
  });
}

if (closeCommentModalBtn) {
  closeCommentModalBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("scroll-lock");
    modalComment.classList.remove("show-modal-comment");
  });
}
if (closeBottomSection) {
  closeBottomSection.addEventListener("click", () => {
    const bottomSection = document.querySelector(".corner-action__order");
    bottomSection.classList.add("close-corner-section");
  });
}
// Animation
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.35] };
let windowWidth = window.innerWidth;
windowWidth <= 768
  ? (options = { threshold: [0.2] })
  : (options = { threshold: [0.35] });
window.addEventListener("resize", (e) =>
  e.target.innerWidth <= 768
    ? (options = { threshold: [0.2] })
    : (options = { threshold: [0.35] })
);
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".anim");
elements.forEach((elm) => observer.observe(elm));
