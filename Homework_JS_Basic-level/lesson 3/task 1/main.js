var a = prompt('Введите логин');
if (a == null){
	alert('Вход отменен');
} else {
	if (a == 'Админ') {
		var b = prompt('Введите пароль');
	if (b == null) {
		alert('Вход отменен');
	} else {
	if (b == 'Черный властелин') {
		alert('Добро пожаловать');
	} else {
		alert('Пароль неверен');
	};
	}; 
} else {
		alert('Я вас не знаю'); 
};
};
