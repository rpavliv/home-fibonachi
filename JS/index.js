var numb = Number(prompt('Enter your number: '));
document.write('Your Fibonacci number : ' + fib(numb));
function fib(n) {
  var a = 1,
    b = 1;
  for (var i = 2; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
