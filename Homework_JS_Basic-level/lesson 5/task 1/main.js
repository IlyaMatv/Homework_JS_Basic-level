  function isThatPalindrome(str) {
    str = prompt('Введите палиндром');
	var strLen = str.length,
        strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
      return true;
    } else {
      return false;
    }
  }
  test = alert(isThatPalindrome());