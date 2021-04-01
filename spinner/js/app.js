let uploadBtn = document.querySelector('#upload-btn');
uploadBtn.addEventListener('click', function() {
        document.querySelector('#show-spinner').classList.add('spinner-border');
        uploadBtn.classList.add('disabled');
});



