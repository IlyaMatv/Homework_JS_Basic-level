 // var message;

 //  if (login === 'Вася') {
 //    message = 'Привет';
 //  } else if (login === 'Директор') {
 //    message = 'Здравствуйте';
 //  } else if (login === '') {
 //    message = 'Нет логина';
 //  } else {
 //    message = '';
 //  }

 var login = prompt('Введите логин');
 var message = (login === 'Вася') ? 'Привет':
 (login === 'Директор') ? 'Здравствуйте':
 (login === '') ? 'Нет логина' : '';
 alert(message);
 	