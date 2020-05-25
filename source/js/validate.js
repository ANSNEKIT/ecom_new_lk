'use strict';

(function () {
    window.addEventListener('load', function () {
        var $forms = document.querySelectorAll('.needs-validation');
        var validation = Array.prototype.filter.call($forms, function ($form) {
            const $pass = document.querySelector('input[data-js-id="pass"]');
            const $repeatPass = document.querySelector('input[data-js-id="repeatPass"]');
            const $error = document.querySelector('input[data-js-id="pass"] + div');
            const $errorRepeat = document.querySelector('input[data-js-id="repeatPass"] + div');

            $form.addEventListener('submit', function (event) {
                if ($form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $form.classList.add('was-validated');
                }

                validatePassAndRepeat($form, $pass, $repeatPass, $error, $errorRepeat);
                validateInn($form);

            }, false);
        });
    }, false);
})();

const validatePassAndRepeat = (form, pass, repeatPass, error, errorRepeat) => {
    if (form && pass && repeatPass && error) {
        repeatPass.addEventListener('change', (evt) => {                
            if(pass.value !== repeatPass.value) {
                form.classList.remove('was-validated');

                pass.classList.add('is-invalid');
                repeatPass.classList.add('is-invalid');
                error.textContent = 'Ошибка! Пароли не совпадают';
                errorRepeat.textContent = 'Ошибка! Пароли не совпадают';
            } else if (pass.value === evt.currentTarget.value) {
                pass.classList.remove('is-invalid');
                repeatPass.classList.remove('is-invalid');
                error.classList.remove('invalid-feedback');
                errorRepeat.classList.remove('invalid-feedback');

                pass.classList.add('is-valid');
                repeatPass.classList.add('is-valid');
                error.classList.add('valid-feedback');
                errorRepeat.classList.add('valid-feedback');

                error.textContent = 'Пароли совпадают!';
                errorRepeat.textContent = 'Пароли совпадают!';
            }
        });

        if (pass.value !== repeatPass.value) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.remove('was-validated');

            pass.classList.add('is-invalid');
            repeatPass.classList.add('is-invalid');
            error.textContent = 'Ошибка! Пароли не совпадают';
            errorRepeat.textContent = 'Ошибка! Пароли не совпадают';
            
        } else if (pass.value === repeatPass.value) {
            pass.classList.remove('is-invalid');
            repeatPass.classList.remove('is-invalid');
            error.textContent = '';
            errorRepeat.textContent = '';

            form.classList.add('was-validated');
            //repeatPass.removeEventListener('change', validatePassAndRepeat);
        }
    } else {
        return;
    }
};

const validateInn = (form) => {
    const $innFirm = document.querySelector('input[data-js-id="innFirm"]');
    const $innFirmError = document.querySelector('div[data-js-id="innFirmError"]');
    const innFirmValue = $innFirm.value;

    let error = {
        code: 0,
        message: '',
    };

    const innChangeHadler = (event) => {
        const innFirmValue = $innFirm.value;
        let error = {
            code: 0,
            message: '',
        };

        let isValidInn = checkValidInn(innFirmValue, error);
        if (isValidInn) {
            form.classList.add('was-validated');
            if ($innFirm.classList.contains('is-invalid')) {
                $innFirm.classList.remove('is-invalid');
            }

            $innFirm.classList.add('is-valid');

            if ($innFirmError.classList.contains('invalid-feedback')) {
                $innFirmError.classList.remove('invalid-feedback');
            }

            $innFirmError.classList.add('valid-feedback');
            $innFirmError.textContent = 'Инн корректный';
        } else {
            event.preventDefault();
            event.stopPropagation();
            $innFirmError.textContent = `${error.message}`;
            form.classList.remove('was-validated');

            if ($innFirm.classList.contains('is-valid')) {
                $innFirm.classList.remove('is-valid');
            };

            $innFirm.classList.add('is-invalid');

            if ($innFirmError.classList.contains('valid-feedback')) {
                 $innFirmError.classList.remove('valid-feedback');
            };
            $innFirmError.classList.add('invalid-feedback');
        }
    }

    if ($innFirm && $innFirmError) {

        let isValidInn = checkValidInn(innFirmValue, error);

        if (isValidInn) {
            form.classList.add('was-validated');

            if ($innFirm.classList.contains('is-invalid')) {
                $innFirm.classList.remove('is-invalid');
            }

            $innFirm.classList.add('is-valid');

            if ($innFirmError.classList.contains('invalid-feedback')) {
                $innFirmError.classList.remove('invalid-feedback');
            }

            $innFirmError.classList.add('valid-feedback');
            $innFirmError.textContent = 'Инн корректный';

            $innFirm.removeEventListener('change', innChangeHadler);
        } else {
            event.preventDefault();
            event.stopPropagation();
            form.classList.remove('was-validated');
            $innFirmError.textContent = `${error.message}`;

            if ($innFirm.classList.contains('is-valid')) {
                $innFirm.classList.remove('is-valid');
            };

            $innFirm.classList.add('is-invalid');

            if ($innFirmError.classList.contains('valid-feedback')) {
                 $innFirmError.classList.remove('valid-feedback');
            };
            $innFirmError.classList.add('invalid-feedback');

            $innFirm.addEventListener('change', innChangeHadler);
        }
    } else {
        new Error('В форме нет поля ИНН');
    }
};

const checkValidInn = (inn, error) => {
    var result = false;
    if (typeof inn === 'number') {
        inn = inn.toString();
    } else if (typeof inn !== 'string') {
        inn = '';
    }
    if (!inn.length) {
        error.code = 1;
        error.message = 'ИНН пуст';
    } else if (/[^0-9]/.test(inn)) {
        error.code = 2;
        error.message = 'ИНН может состоять только из цифр';
    } else if ([10, 12].indexOf(inn.length) === -1) {
        error.code = 3;
        error.message = 'ИНН может состоять только из 10 или 12 цифр';
    } else {
        var checkDigit = function (inn, coefficients) {
            var n = 0;
            for (var i in coefficients) {
                n += coefficients[i] * inn[i];
            }
            return parseInt(n % 11 % 10);
        };
        switch (inn.length) {
            case 10:
                var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if (n10 === parseInt(inn[9])) {
                    result = true;
                }
                break;
            case 12:
                var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                    result = true;
                }
                break;
        }
        if (!result) {
            error.code = 4;
            error.message = 'Неправильное контрольное число';
        }
    }
    return result;
};
