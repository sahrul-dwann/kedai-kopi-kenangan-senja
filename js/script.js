// tooggle class active untuk  hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toggle class active untuk search menu
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// tooggle class active untuk  shopping cart button
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal2 = document.querySelector("#item-detail-modal-2");
const itemDetailModal3 = document.querySelector("#item-detail-modal-3");
const itemDetailButton = document.querySelector(".item-detail-button");
const itemDetailButton2 = document.querySelector(".item-detail-button-2");
const itemDetailButton3 = document.querySelector(".item-detail-button-3");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

// klick tombol box
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-2").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

document.querySelector(".modal .close-icon-3").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

// klick diluar modal
const modal = document.querySelector("#item-detail-modal");
const modal2 = document.querySelector("#item-detail-modal-2");
const modal3 = document.querySelector("#item-detail-modal-3");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
  if (e.target === modal2) {
    modal2.style.display = "none";
  }
  if (e.target === modal3) {
    modal3.style.display = "none";
  }
};
