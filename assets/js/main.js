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
