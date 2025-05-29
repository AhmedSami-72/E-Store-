

// ============ PRELOADER ============ //
// Shows loading animation until page fully loads //
window.addEventListener("load", () => {
  const loader = document.getElementById("pre-loader");
  setTimeout(() => {
    loader.classList.add("hide");
    // Initialize Animate On Scroll library
    AOS.init({
      duration: 5000,
    });
  }, 1000);
});

window.addEventListener("load", () => {
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".popup-close");
  const subscribeBtn = document.getElementById("subscribe-btn");

  if (popup) {
    // Show popup after 4 seconds
    setTimeout(() => {
      popup.classList.add("show");
    }, 4000);
  }

  if (closePopup && popup) {
    closePopup.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }

  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const popupDiv = document.getElementById("popup");
      if (popupDiv) popupDiv.style.display = "none";
    });
  }
});

// ============ SEARCH/MENU CONTROLS ============
let searchBtn = document.querySelector("#search-btn");
let searchForm = document.querySelector(".search-form");
let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");

// Toggle search form visibility
function showbar() {
  searchBtn.classList.toggle("fa-times");
  searchForm.classList.toggle("active");
}

// Toggle mobile menu visibility
function showMenu() {
    menuBar.classList.toggle("fa-times");
    amenu.classList.toggle("active");
}

// ============ LOGIN SYSTEM ============
const loginFormContainer = document.getElementById("loginFormContainer");
const loginForm = document.getElementById("loginForm");
const loggedInUser = document.getElementById("loggedInUser");
const userMenu = document.getElementById("userMenu");

// Toggle user menu or show login form
function toggleUserMenu() {
  if (localStorage.getItem("loggedInUser")) {
    userMenu.classList.toggle("active");
  } else {
    loginFormContainer.classList.add("active");
  }
}

// Hide login form
function hideLoginForm() {
  loginFormContainer.classList.remove("active");
}

// Check and display login status
function checkLoginStatus() {
  const userData = localStorage.getItem("loggedInUser");
  if (userData) {
    const user = JSON.parse(userData);
    loggedInUser.textContent = user.name;
    loggedInUser.style.display = "inline";
  } else {
    loggedInUser.style.display = "none";
  }
}

// Handle user login
function login(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const userData = {
      name: user.name,
      email: user.email,
      isLoggedIn: true,
    };

    localStorage.setItem("loggedInUser", JSON.stringify(userData));

    if (document.getElementById("remember").checked) {
      localStorage.setItem("rememberMe", "true");
    }

    checkLoginStatus();
    hideLoginForm();
    alert("Login successful! Welcome back, " + user.name);
    return true;
  }

  alert("Invalid email or password!");
  return false;
}

// Handle user logout
function logout() {
  localStorage.removeItem("loggedInUser");
  checkLoginStatus();
  userMenu.classList.remove("active");
  alert("You have been logged out.");
}

// Close user menu when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest(".user-container")) {
    userMenu.classList.remove("active");
  }
});

// Initialize login system when DOM loads
document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});

// Handle login form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  login(email, password);
});

// Make functions globally available
window.toggleUserMenu = toggleUserMenu;
window.hideLoginForm = hideLoginForm;
window.logout = logout;

const toggle = document.getElementById("scroll-to-top");
const body = document.body;

// شوف إذا كان في وضع محفوظ في localStorage
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
  toggle.classList.add("bi-moon");
} else {
  toggle.classList.add("bi-brightness-high-fill");
}

// عند الضغط على الزر
toggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");

  // بدّل الأيقونة
  this.classList.toggle("bi-moon", isDark);
  this.classList.toggle("bi-brightness-high-fill", !isDark);

  // احفظ الوضع في localStorage
  localStorage.setItem("mode", isDark ? "dark" : "light");
});


// ============ SHOPPING CART ============
var cartBtn = document.querySelector(".cart-icon");
  var cartCount = document.querySelector(".cart-count");
  var cart = document.querySelector(".cart");
  var cartTotal = document.querySelector(".cart .total .amount");
  var cartItems = [];

  // تحميل السلة من التخزين المحلي
  if (localStorage.getItem("cartItems")) {
    cartItems = JSON.parse(localStorage.getItem("cartItems"));
    updateCart();
  }

  // دالة إضافة منتج للسلة
  function addToCart(event) {
    var product = event.target.closest(".showcase");
    if (!product) return;

    var title = product.querySelector(".showcase-title").textContent.trim();
    var price = product.querySelector(".product-price").textContent.trim();

    // نبحث هل المنتج مضاف مسبقًا
    var existingItem = cartItems.find((item) => item.title === title);

    if (!existingItem) {
      cartItems.push({
        title: title,
        price: price,
        quantity: 1,
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCart();
    } else {
      alert("تم إضافة هذا المنتج بالفعل. يمكنك تعديل الكمية لاحقًا من داخل السلة أو من صفحة المنتج.");
    }
  }

  // إزالة منتج من السلة
  function removeFromCart(event) {
    var index = event.target.getAttribute("data-index");
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCart();
  }

  // تحديث مظهر السلة
  function updateCart() {
    var cartList = cart.querySelector("ul");
    var total = 0;
    var count = 0;
    cartList.innerHTML = "";

    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
      var li = document.createElement("li");
      var title = document.createElement("span");
      var price = document.createElement("span");
      var quantity = document.createElement("span");
      var removeBtn = document.createElement("button");

      title.textContent = item.title;
      price.textContent = item.price;
      quantity.textContent = ` ×${item.quantity}`;

      removeBtn.textContent = "إزالة";
      removeBtn.setAttribute("data-index", i);
      removeBtn.classList.add("remove-item");
      removeBtn.addEventListener("click", removeFromCart);

      li.appendChild(title);
      li.appendChild(quantity);
      li.appendChild(price);
      li.appendChild(removeBtn);
      cartList.appendChild(li);

      total += parseFloat(item.price.replace("$", "")) * item.quantity;
      count += item.quantity;
    }

    cartTotal.textContent = "$" + total.toFixed(2);
    cartCount.textContent = count;
  }

  // فتح/غلق السلة
  cartBtn.addEventListener("click", function () {
    cart.classList.toggle("open");
  });

  // ربط الأزرار بالوظيفة
  var addToCartBtns = document.querySelectorAll(".add-to-cart");
  for (var i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", addToCart);
  }
// ============ CONTACT FORM VALIDATION ============
function formValidation() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let errorMessage = document.querySelector(".error-message");
  errorMessage.innerHTML = "";

  if (name.value === "") {
    errorMessage.innerHTML = "Please enter your name";
    name.focus();
    return false;
  }

  if (email.value === "") {
    errorMessage.innerHTML = "Please enter your email";
    email.focus();
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errorMessage.innerHTML = "Please enter a valid email";
    email.focus();
    return false;
  }

  if (message.value === "") {
    errorMessage.innerHTML = "Please enter your message";
    message.focus();
    return false;
  }

  return true;
}

// ============ REGISTRATION FORM VALIDATION ============
const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Validate email format
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid");
  }
  emailField.classList.remove("invalid");
}

// Toggle password visibility
const eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Validate password strength
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid");
  }
  passField.classList.remove("invalid");
}

// Validate password confirmation
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();

  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});

// ============ PRODUCT SEARCH ============
function search() {
  let searchBar = document.querySelector("#search-bar").value.toUpperCase();
  let productList = document.querySelector(".product-main");
  let product = document.querySelectorAll(".showcase");
  let productName = document.getElementsByClassName("showcase-title");

  for (let i = 0; i < productName.length; i++) {
    if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
      product[i].style.display = "";
    } else {
      product[i].style.display = "none";
    }
  }
}

var cartBtn = document.querySelector(".cart-icon");
var cartCount = document.querySelector(".cart-count");
var cart = document.querySelector(".cart");
var cartTotal = document.querySelector(".cart .total .amount");
var cartItems = [];

// تحميل السلة من التخزين المحلي
if (localStorage.getItem("cartItems")) {
  cartItems = JSON.parse(localStorage.getItem("cartItems"));
  updateCart();
}

// دالة إضافة منتج للسلة
function addToCart(event) {
  var product = event.target.closest(".showcase");
  if (!product) return;

  var title = product.querySelector(".showcase-title").textContent.trim();
  var price = product.querySelector(".product-price").textContent.trim();

  // نبحث هل المنتج مضاف مسبقًا
  var existingItem = cartItems.find((item) => item.title === title);

  if (!existingItem) {
    // نضيفه مرة واحدة فقط وبعدد 1
    cartItems.push({
      title: title,
      price: price,
      quantity: 1,
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCart();
  } else {
    // لا تفعل شيء إذا المنتج موجود
    alert(
      "تم إضافة هذا المنتج بالفعل. يمكنك تعديل الكمية لاحقًا من داخل السلة أو من صفحة المنتج."
    );
  }
}

// إزالة منتج من السلة
function removeFromCart(event) {
  var index = event.target.getAttribute("data-index");
  cartItems.splice(index, 1);
  updateCart();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// تحديث مظهر السلة
function updateCart() {
  var cartList = cart.querySelector("ul");
  var total = 0;
  var count = 0;
  cartList.innerHTML = "";

  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];
    var li = document.createElement("li");
    var title = document.createElement("span");
    var price = document.createElement("span");
    var quantity = document.createElement("span");
    var removeBtn = document.createElement("button");

    title.textContent = item.title;
    price.textContent = item.price;
    quantity.textContent = ` ×${item.quantity}`;

    removeBtn.textContent = "إزالة";
    removeBtn.setAttribute("data-index", i);
    removeBtn.classList.add("remove-item");
    removeBtn.addEventListener("click", removeFromCart);

    li.appendChild(title);
    li.appendChild(quantity);
    li.appendChild(price);
    li.appendChild(removeBtn);
    cartList.appendChild(li);

    total += parseFloat(item.price.replace("$", "")) * item.quantity;
    count += item.quantity;
  }

  cartTotal.textContent = "$" + total.toFixed(2);
  cartCount.textContent = count;
}

// فتح/غلق السلة
cartBtn.addEventListener("click", function () {
  cart.classList.toggle("open");
});

// ربط الأزرار بالوظيفة
var addToCartBtns = document.querySelectorAll(".add-to-cart");
for (var i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", addToCart);
}
