function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
var friends = { first:'Вован', second:'Андрей', third:'Саня' };
alert(isEmpty(friends));