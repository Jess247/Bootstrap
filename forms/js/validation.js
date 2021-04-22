


// bootstrap validate form
(function () {
// execute in strict mode
    'use strict'

// Fetch all the forms and apply validation styles
    var forms = document.querySelectorAll('.needs-validation')
    

// Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
        })
})()