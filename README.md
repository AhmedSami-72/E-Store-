<h1 align="center">🛍 E-STORE</h1>
<p align="center">
  A modern and fully responsive e-commerce website for shopping clothes, accessories, toys, and more.
  <br><br>
  <strong>Light & Dark Mode | Shopping Cart | Login System | Animated UI | AOS | Local Storage</strong>
</p>

<p align="center">
  <a href="#demo">🎬 Demo</a> • 
  <a href="#features">✨ Features</a> • 
  <a href="#pages">📄 Pages</a> • 
  <a href="#technologies-used">🧰 Technologies</a> • 
  <a href="#screenshots">📸 Screenshots</a> • 
  <a href="#how-to-use">🚀 How to Use</a> • 
  <a href="#contact">📬 Contact</a>
</p>

---

## 🎬 Demo Video

[![Watch the Demo]([https://i.imgur.com/MqFQG3b.png](https://drive.google.com/file/d/1Hl6EBpgcPAEYs7eM2MhLduY2tZvNCGhH/view?usp=sharing)](https://vimeo.com/1089603956)

🖱 Click the image above to watch the full demo video of **E-STORE** on Vimeo.


---

## ✨ Features

Here are the main features that make *E-STORE* interactive and modern:

- 🌗 *Light/Dark Mode* — Toggle between light and dark themes with smooth transitions.
- 📱 *Responsive Design* — Looks great on desktop, tablet, and mobile.
- 🛒 *Shopping Cart System*:
  - Add products to cart
  - Update quantity
  - Auto-calculated total price
  - Remove items
- 💳 *Checkout Page* — Simulated payment form with card and user data.
- 👤 *Authentication (Local Storage)*:
  - Sign up with username, email, and password
  - Login with saved data
  - Welcome message after login
- 🔍 *Live Product Search* — Find any item by typing its name.
- 👁 *Quick View* — Hover over product image to see alternative views and quick action icons.
- 📰 *Blog Page* — Articles related to the store, popular blogs, and an email subscription field.
- 📧 *Contact Page* — Google Maps + contact form for customer messages.
- ⏳ *Preloader* — Smooth loading animation before homepage loads.
- 📩 *Popup Subscription* — Email signup modal appears on homepage.
- ✨ *AOS Animation* — Smooth scroll animations throughout the site.

---

## 📄 Pages

### 🔹 Home Page
- Preloader animation at start.
- Email subscription popup.
- Hero section with call-to-action.
- Featured products.
- Category highlights.
- Theme switcher.
- AOS animations.

### 🔹 Shop Page
- List of all products.
- Hover effects to show extra product images.
- "View" (eye icon) opens full product page.
- "Add to Cart" button directly from the card.

### 🔹 Product Page
- Full-size images of the selected product.
- Ability to choose quantity.
- Detailed product description and price.
- Add to cart from this page as well.

### 🔹 Cart Page
- View all added products.
- Update quantity or remove items.
- View subtotal and proceed to checkout.

### 🔹 Checkout Page
- Simple form to simulate payment.
- Card number, name, and expiration.
- Confirm purchase button (front-end only).

### 🔹 Login / Signup Pages
- Forms for new users and returning users.
- Stored in localStorage.
- After login, homepage shows user’s name.

### 🔹 Blog Page
- Featured and recent articles.
- Subscription form to get email updates.

### 🔹 Contact Page
- Form for name, email, and message.
- Integrated with Google Maps.

---

## 🧰 Technologies Used

| Technology     | Usage                                   |
|----------------|------------------------------------------|
| *HTML5*      | Page structure and content layout        |
| *CSS3*       | Custom styling and responsive design     |
| *JavaScript* | Logic for cart, auth, search, toggles    |
| *Bootstrap 5*| Grid system and ready-made components    |
| *Font Awesome* | Icons for buttons and UI elements      |
| *ION Icons*  | Extra icon styles                       |
| *AOS (Animate on Scroll)* | Scroll-triggered animations |
| *Local Storage* | Store user data and sessions         |

---

## 📁 Project Structure

```bash
e-store/
├── index.html                  # Home page
├── css/
│   └── style.css               # All custom styles
├── js/
│   └── main.js                 # All JavaScript logic
├── images/                     # Product and UI images
├── pages/
│   ├── shop.html
│   ├── product.html
│   ├── cart.html
│   ├── checkout.html
│   ├── blog.html
│   ├── contact.html
│   ├── login.html
│   └── signup.html
└── README.md                   # Project documentation
