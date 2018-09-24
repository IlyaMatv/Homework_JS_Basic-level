// function isThatAnagram(a, b) {
// 	var f = a.split('').sort();
// 	var s = b.split('').sort();
// 	for ( i = 0; i < f.length; i++ ) {
// 		if (f.length === s.length) {
// 			if ( f[i] === s[i] ) {
// 				console.log(a + ' и ' + b + ' анаграммы');
// 				break;
// 			}
// 			else {
// 				console.log(a + ' и ' + b + ' не анаграммы');
// 				break;
// 			}
// 		}
// 		else {
// 			console.log('у слов ' + a + ' и ' + b + ' разное количество букв');
// 		}
// 		break;
// 	} 
// }; Первая функиця не совсем корректно работает



function isThatAnagram (a, b) {
    var f = a.split("").sort().join(""),
        s = b.split("").sort().join("");
    console.log(s === f
        ? a + " и " + b + " анаграммы!"
        : a + " и " + b + " не являюстя анаграммами!"
    );
}

isThatAnagram('лунь', 'нуль');