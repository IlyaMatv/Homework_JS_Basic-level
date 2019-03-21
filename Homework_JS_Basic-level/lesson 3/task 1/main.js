var login = prompt('Введите логин');

if (login == 'Админ' || login == 'админ') {
    var pass = prompt('Введите пароль')
    if (pass == 'Чёрный Властелин' || pass == 'чёрный властелин') {
        alert('Добро пожаловать!')
    } else if (pass == null) {
        alert('Вход отменён') 
    }else if (pass != 'Чёрный Властелин') {
        alert('Пароль неверен') 
    }
} else if (login == null) {
    alert('Вход отменён')
} else if (login != 'Админ') {
    alert('Я вас не знаю')
};

