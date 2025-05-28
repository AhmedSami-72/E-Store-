// Check if a saved mode exists in localStorage
if (localStorage.getItem("mode") === "dark") { 
  // If mode is "dark", add dark-mode class to body
  body.classList.add("dark-mode"); 
  // Add moon icon class to toggle button
  toggle.classList.add("bi-moon"); 
} else { 
  // If mode is not "dark", add sun icon class to toggle button
  toggle.classList.add("bi-brightness-high-fill"); 
} 
 
// When the toggle button is clicked
toggle.addEventListener("click", function () { 
  // Toggle dark-mode class on body
  body.classList.toggle("dark-mode"); 
 
  // Check if dark mode is active
  const isDark = body.classList.contains("dark-mode"); 
 
  // Change the icon based on the mode
  this.classList.toggle("bi-moon", isDark); 
  this.classList.toggle("bi-brightness-high-fill", !isDark); 
 
  // Save the current mode in localStorage
  localStorage.setItem("mode", isDark ? "dark" : "light"); 
});

// scroll-to-top
document.addEventListener("DOMContentLoaded", () => {
    // Get the scroll-to-top button
    let scrollToTopButton = document.getElementById("scroll-to-top-button");

    // Show or hide the button when scrolling
    window.addEventListener("scroll", () => {
        // If scrolled more than 300px from top, show the button
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            // Otherwise, hide the button
            scrollToTopButton.style.display = "none";
        }
    });

    // Scroll to top when button is clicked
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Smooth scrolling animation
        });
    });
});


// ============ PRELOADER ============
// Shows loading animation until page fully loads
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