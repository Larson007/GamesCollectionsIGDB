export function initDashboard() {

    console.log('Hello from dashboard.js');

    $(document).ready(function () {

            // Form User Info Update
            const changePseudoButton = document.getElementById('changePseudo');
            const changeEmailButton = document.getElementById('changeEmail');
            //const changePasswordButton = document.getElementById('changePassword');
            
            const toggleInput = (button, inputId) => {
            button.addEventListener('click', function (e) {
            e.preventDefault();
            const input = document.getElementById(inputId);
            if (input.readOnly) {
            input.readOnly = false;
            this.style.backgroundColor = '#ee727a';
            input.style.backgroundColor = '#fff';
            } else {
            input.readOnly = true;
            this.style.backgroundColor = '';
            input.style.backgroundColor = '#868686';
            }
            });
            };
            
            toggleInput(changePseudoButton, 'user_update_pseudo');
            toggleInput(changeEmailButton, 'user_update_email');
            // toggleInput(changePasswordButton, 'user_update_password');
            // toggleInput(changePasswordButton, 'confirmPassword');
            });
            
            // Form User Avatar Update
            document.getElementById('changeAvatar').addEventListener('change', function () {
            const file = this.files[0];
            if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
            document.getElementById('avatarImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
            }
    });



}