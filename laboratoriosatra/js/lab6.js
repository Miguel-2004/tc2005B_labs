function checkStrength() {
    const password = document.getElementById('password').value;
    const strengthText = document.getElementById('password-strength');
    const submitButton = document.getElementById('submit-btn');
    let strength = 'Weak';
    let strengthClass = 'strength-weak';

    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = 'Strong';
        strengthClass = 'strength-strong';
    } else if (password.length >= 6) {
        strength = 'Medium';
        strengthClass = 'strength-medium';
    }

    strengthText.textContent = `Strength: ${strength}`;
    strengthText.className = strengthClass;
    submitButton.disabled = strength !== 'Strong';
}

function checkMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const submitButton = document.getElementById('submit-btn');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        submitButton.disabled = true;
    } else {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'block';
        submitButton.disabled = password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password);
    }
}
