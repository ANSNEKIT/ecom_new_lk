let formGroup1 = document.querySelector(".FormGroup1");
/*let newPass = document.getElementById('new-password');
let pass = document.getElementById('password');
let passRepeat = document.getElementById('passwordRepeat');*/

let count = 0;
let countPass = 0;
let countPassRepeat = 0;

formGroup1.addEventListener('keyup', (evt) => {
    let newPass = document.getElementById('new-password');
    let pass = document.getElementById('password');
    let passRepeat = document.getElementById('passwordRepeat');
    let e = evt.target;

    if (e === newPass) {
        count = $("input[id='new-password']").val().length;

        $('#password-strength-meter').val(count);
    } else if (e === pass) {
        countPass = $("input[id='password']").val().length;

        $('#pass-strength-meter').val(countPass);
    } else if (e === passRepeat) {
        countPassRepeat = $("input[id='passwordRepeat']").val().length;

        $('#password-strength-meter').val(countPassRepeat);
    }

});


