       // DOM Elements
        const signupForm = document.getElementById('signupForm');
        
        // Validate Email
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        // Validate Password
        function validatePassword(password) {
            // const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            const re = /^[A-Za-z\d]{6,}$/;
            return re.test(password);
        }
        
        // Handle Sign Up
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            // Reset errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            let isValid = true;
            
            // Validate name
            if (!name.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            if (!validateEmail(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validate password
            if (!validatePassword(password)) {
                document.getElementById('passwordError').style.display = 'block';
                isValid = false;
            }
            
            // Validate confirm password
            if (password !== confirmPassword) {
                document.getElementById('confirmError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                // Get existing users or create new array
                const users = JSON.parse(localStorage.getItem('users')) || [];
                
                // Check if user already exists
                const userExists = users.some(user => user.email === email);
                
                if (userExists) {
                    alert('User with this email already exists!');
                    return;
                }
                
                // Add new user
                users.push({
                    name: name,
                    email: email,
                    password: password
                });
                
                // Save to localStorage
                localStorage.setItem('users', JSON.stringify(users));
                
                // Auto login after signup
                const userData = {
                    name: name,
                    email: email,
                    isLoggedIn: true
                };
                localStorage.setItem('loggedInUser', JSON.stringify(userData));
                
                // Redirect to home page
                window.location.href = '/index.html';
            }
        });