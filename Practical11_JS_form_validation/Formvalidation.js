document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Validation Functions
    function validateUsername() {
        const username = usernameInput.value.trim();
        if (username.length < 3 || username.length > 15) {
            usernameError.textContent = 'Username must be between 3 and 15 characters.';
            return false;
        } else {
            usernameError.textContent = '';
            return true;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            passwordError.textContent = 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.';
            return false;
        } else {
            passwordError.textContent = '';
            return true;
        }
    }

    function validateConfirmPassword() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        if (password !== confirmPassword) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            return false;
        } else {
            confirmPasswordError.textContent = '';
            return true;
        }
    }

    // Enable/Disable Submit Button
    function toggleSubmitButton() {
        const isFormValid = validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword();
        submitBtn.disabled = !isFormValid;
    }

    // Event Listeners
    usernameInput.addEventListener('input', () => {
        validateUsername();
        toggleSubmitButton();
    });

    emailInput.addEventListener('input', () => {
        validateEmail();
        toggleSubmitButton();
    });

    passwordInput.addEventListener('input', () => {
        validatePassword();
        validateConfirmPassword();
        toggleSubmitButton();
    });

    confirmPasswordInput.addEventListener('input', () => {
        validateConfirmPassword();
        toggleSubmitButton();
    });
});