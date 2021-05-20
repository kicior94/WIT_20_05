import Menu from './Menu.js';

const loginCredentials = {
    login: 'Admin',
    password: '1234'
};

const LoginForm = () => {
    const loginForm = $(document.createElement('div'));
    loginForm.attr({
        class: 'container'
    });
    const loginInput = $(document.createElement('input'));
    loginInput.attr({
        class: 'form-control',
        id: 'loginInput',
        type: 'text',
        placeholder: 'Login...'
    });
    const passwordInput = $(document.createElement('input'));
    passwordInput.attr({
        class: 'form-control',
        id: 'passwordInput',
        type: 'password',
        placeholder: 'Password...'
    });
    const submitButton = $(document.createElement('button'));
    submitButton.html('Log-in');
    submitButton.attr({
        class: 'btn btn-light'
    });
    submitButton.click(verifyFormValues);

    loginForm.append([loginInput, passwordInput, submitButton]);
    return loginForm;
};

function getFormValues() {
    const login = $('#loginInput').val();
    const password = $('#passwordInput').val();
    return {
        login: login,
        password: password
    };
};

function verifyFormValues() {
    const formValues = getFormValues();
    if (formValues.login == loginCredentials.login &&
        formValues.password == loginCredentials.password) {
        alert('Dane logowania są poprawne.');
        $('#router').empty();
        const menu = Menu();
        $('#router').append(menu);
    } else {
        alert('Dane logowania są niepoprawne.');
    }
}

export default LoginForm;