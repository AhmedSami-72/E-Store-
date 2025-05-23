// When scrolling the page, add "sticky" class to header
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Get elements from the page
let searchBtn = document.querySelector("#search-btn");        // search icon
let searchForm = document.querySelector(".search-form");      // search form
let loginForm = document.querySelector(".login-form");        // login form
let menuBar = document.querySelector("#menu-bar");            // menu icon (mobile)
let amenu = document.querySelector(".navbar");                // navigation menu
let vidBtn = document.querySelectorAll(".video-btn");         // video buttons (if used)

// Show or hide the search form
function showbar() {
    searchBtn.classList.toggle("fa-times");    // change icon to "X"
    searchForm.classList.toggle("active");     // show/hide the form
}

// Show the login form
function showform() {
    loginForm.classList.add("active");
}

// Hide the login form
function hideform() {
    loginForm.classList.remove("active");
}

// Show or hide the menu on mobile
function showmenu() {
    menuBar.classList.toggle("fa-times");    // change menu icon
    amenu.classList.toggle("active");        // show/hide menu links
}


// add products to cart
var cartBtn = document.querySelector('.cart-icon');
var cartCount = document.querySelector('.cart-count');
var cart = document.querySelector('.cart');
var cartTotal = document.querySelector('.cart .total .amount');
var cartItems = [];

// Add item to cart
function addToCart(event) {
    var product = event.target.parentNode;
    var title = product.querySelector('h2').textContent;
    var price = product.querySelector('.price').textContent;
    var item = {
        title: title,
        price: price
    };
    cartItems.push(item);
    updateCart();
}

// Remove item from cart
function removeFromCart(event) {
    var index = parseInt(event.target.getAttribute('data-index'));
    cartItems.splice(index, 1);
    updateCart();
}

// Update cart
function updateCart() {
    var cartList = cart.querySelector('ul');
    var total = 0;
    cartList.innerHTML = '';
    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var li = document.createElement('li');
        var title = document.createElement('span');
        var price = document.createElement('span');
        var removeBtn = document.createElement('button');
        title.textContent = item.title;
        price.textContent = item.price;
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('data-index', i);
        removeBtn.classList.add('remove-item');
        removeBtn.addEventListener('click', removeFromCart);
        li.appendChild(title);
        li.appendChild(price);
        li.appendChild(removeBtn);
        cartList.appendChild(li);
        total += parseFloat(item.price.replace('$', ''));
    }
    cartTotal.textContent = '$' + total.toFixed(2);
    cartCount.textContent = cartItems.length;
}

// Toggle cart
function toggleCart() {
    cart.classList.toggle('open');
}

// Add event listeners
cartBtn.addEventListener('click', toggleCart);
var addToCartBtns = document.querySelectorAll('.add-to-cart');
for (var i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', addToCart);
}
// add products to cart /




// dark mode
const toggle = document.getElementById("scroll-to-top");
const body = document.body;
const head = document.querySelector("header");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    this.classList.toggle("bi-brightness-high-fill");
    body.classList.toggle("dark-mode");
});
// dark mode //

// Add item to cart
function addToCart(event) {
    var product = event.target.parentNode;
    var title = product.querySelector("h2").textContent;
    var price = product.querySelector(".price").textContent;
    var item = {
        title: title,
        price: price
    };
    cartItems.push(item);
    updateCart();
}

// Remove item from cart
function removeFromCart(event) {
    var index = parseInt(event.target.getAttribute("data-index"));
    cartItems.splice(index, 1);
    updateCart();
}

// function search
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
