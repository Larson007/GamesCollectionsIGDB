export function notifications() {

    console.log('Hello from notifications.js');

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('.flash-message').forEach(flashMessage => {
            const message = flashMessage.textContent;
            if (flashMessage.classList.contains('success')) {
                toastr.success(message);
            } else if (flashMessage.classList.contains('error')) {
                toastr.error(message);
            }
        });
    });

}