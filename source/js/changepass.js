let newPass = document.getElementById('new-password');
let count = 0;

newPass.addEventListener('keyup', () => {
    count = $("input[id='new-password']").val().length;

   $('#password-strength-meter').val(count);
});
