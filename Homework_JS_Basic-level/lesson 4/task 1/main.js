function isEmpty(obj) {
  for (var k in obj) {
    return false;
  }
  return true;
}
var friends = { first:'Вован', second:'Андрей' };
alert(isEmpty(friends));