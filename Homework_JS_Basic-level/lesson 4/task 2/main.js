var x = prompt('Введите x');
var n = prompt('Введите n');
function pow(x,n) {
	var a = x;
	for (var i = 0; i < n; i++) {
		a = a * x;
		console.log(a);
	};
};
pow(x,n);