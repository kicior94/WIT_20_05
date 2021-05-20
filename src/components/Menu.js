import LoginForm from './LoginForm.js';

const Menu = () => {
    const menu = $(document.createElement('div'));
    menu.attr({
        class: 'container d-flex flex-column align-items-center justify-content-center',
        id: 'menu'
    });
    const addBookBtn = $(document.createElement('button'));
    addBookBtn.html('Add book');
    addBookBtn.attr({
        class: 'btn btn-light'
    });
    const getBookBtn = $(document.createElement('button'));
    getBookBtn.html('Get books');
    getBookBtn.attr({
        class: 'btn btn-light'
    });
    const updateBookBtn = $(document.createElement('button'));
    updateBookBtn.html('Update book');
    updateBookBtn.attr({
        class: 'btn btn-light'
    });
    const removeBookBtn = $(document.createElement('button'));
    removeBookBtn.html('Remove book');
    removeBookBtn.attr({
        class: 'btn btn-light'
    });
    const logoutBtn = $(document.createElement('button'));
    logoutBtn.html('Log-out');
    logoutBtn.attr({
        class: 'btn btn-light'
    });
    logoutBtn.click(logout);

    menu.append([
        addBookBtn, getBookBtn, updateBookBtn,
        removeBookBtn, logoutBtn
    ]
    );

    return menu;
};

function logout(){
    $('#router').empty();
    const loginForm = LoginForm();
    $('#router').append(loginForm);
};

export default Menu;