var a = 1;

function seven() {
  a = 7;
  seven.prototype.a = -1;
  return a
}


seven.prototype.b = 8;
seven();
console.log(a);
