const alertBtn = document.querySelector('#alert-btn');
const alertMessage = document.querySelector('#alert-message');

alertBtn.addEventListener('click', function() {
    alertMessage.classList.remove('hide');
});