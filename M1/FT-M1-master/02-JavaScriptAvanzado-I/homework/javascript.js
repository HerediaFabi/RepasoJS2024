//! S C O P E   Y   H O I S T I N G
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);

//? ------------------------------------------------------

console.log(bar);
//console.log(baz); --> baz is not defined
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;

//? ------------------------------------------------------

var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor);

//? -------------------------------------------------------

var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);

//? --------------------------------------------------------

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);

//! C O E R C I O N   D E   D A T O S
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log({}[0]); //undefinded
console.log(5 && 2); // 2
console.log(2 && 5); // 5
console.log(5 || 0); // 5
console.log(0 || 5); // 5
console.log([3] + [3] - [10]); //[-4]
console.log(3 > 2 > 1); // false
console.log([] == ![]); //false
console.log(parseInt("09")); // 9

//? ---------------------------------------------------------
