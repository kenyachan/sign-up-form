const confirmPasswordInput = document.querySelector('#passwordConfirmation');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

confirmPasswordInput.addEventListener('focusout', confirmPassword);

function confirmPassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        console.log('Passwords do not match');

        confirmPasswordInput.classList.add('error');
        passwordInput.classList.add('error');
        errorMessage.style.visibility = 'visible';
        passwordInput.setCustomValidity('Passwords do not match.');
        confirmPasswordInput.setCustomValidity('Passwords do not match.');

    } else {
        confirmPasswordInput.classList.remove('error');
        passwordInput.classList.remove('error');
        errorMessage.style.visibility = 'hidden';
        passwordInput.setCustomValidity('');
        confirmPasswordInput.setCustomValidity('');
    }
}