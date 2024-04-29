const selectDoseSelector = document.querySelector("#select-dose");
const quantityInput = document.querySelector("#quantity");
const countSection = document.querySelector(".count__section");
const newPriceSection = document.querySelector(".new-price_number");
const oldPriceSection = document.querySelector(".old-price_number");
const selectOptions = document.querySelectorAll(".itc-select__option");

let priceTotalSelector = document.querySelector(".new-price_number");
let priceTotal = priceTotalSelector
  ? document.querySelector(".new-price_number").textContent
  : null;
let counter = 1;
let selectedPriceSelector = document.querySelector(".new-price_number");
let selectedPrice = selectedPriceSelector
  ? document.querySelector(".new-price_number").textContent
  : null;
let discountSelector = document.querySelector(".discount__text-value");
let discount = discountSelector
  ? document.querySelector(".discount__text-value").textContent
  : null;
let oldPrice;

const updateQuantity = (newValue) => {
  quantityInput.value = newValue;
};

const updatePrice = () => {
  priceTotal = counter * selectedPrice;
  newPriceSection.textContent = priceTotal.toFixed(2);
  oldPriceSection.textContent = priceTotal * (1 + discount / 100);
  oldPrice = priceTotal * (1 + discount / 100);
  oldPriceSection.textContent = oldPrice.toFixed(2);
};

const validationProductReview = {
  name: false,
  email: false,
  comment: false,
};

const nameReviewInput = document.querySelector("#name-review");
const commentReviewInput = document.querySelector("#text_comment");
const emailReviewInput = document.querySelector("#email-review");
const reviewFormSubmitBtn = document.querySelector(".comment__form-btn");

const validationOnEmpty = (e, changeObjVal) => {
  const inputSection = e.target.parentElement;
  if (e.target.value.length <= 0) {
    inputSection.classList.add("show-warning");
    validationProductReview[changeObjVal] = false;
  } else {
    inputSection.classList.remove("show-warning");
    validationProductReview[changeObjVal] = true;
  }
};

function handleFileSelect(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const imgElement = document.getElementById("new-photo");
    imgElement.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

const uploadInput = document.querySelector("#upload-photo");

if (selectDoseSelector) {
  const selectDose = new ItcCustomSelect("#select-dose");
}

selectOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    selectedPrice = e.target.dataset.price;
    updatePrice();
  });
});
if (countSection) {
  countSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-plus")) {
      ++counter;
      updateQuantity(counter);
      updatePrice();
    }
    if (e.target.classList.contains("btn-minus")) {
      if (counter <= 1) return;
      --counter;
      updateQuantity(counter);
      updatePrice();
    }
  });
}

if (quantityInput) {
  quantityInput.addEventListener("input", (e) => {
    counter = e.target.value;
    updateQuantity(counter);
    updatePrice();
  });
}

nameReviewInput.addEventListener("blur", (e) => {
  validationOnEmpty(e, "name");
});

commentReviewInput.addEventListener("blur", (e) => {
  validationOnEmpty(e, "comment");
});

emailReviewInput.addEventListener("blur", (e) => {
  if (!validateEmail(e.target.value)) {
    e.target.parentElement.classList.add("show-warning");
    validationProductReview.email = false;
  } else {
    e.target.parentElement.classList.remove("show-warning");
    validationProductReview.email = true;
  }
});

reviewFormSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(validationProductReview);
  if (
    validationProductReview.email &&
    validationProductReview.name &&
    validationProductReview.comment
  ) {
    alert("Спасибо за заказ!");
  } else {
    alert("Проверьте данные!");
  }
});

uploadInput.addEventListener("change", handleFileSelect);
