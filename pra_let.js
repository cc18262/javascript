//http://www.tohoho-web.com/js/statement.htm で練習してます
//変数、定数宣言の練習
var a = 3;
let b = 3;
{
  var a = 5;
  let b = 5;
}
console.log(a);    // 5 (ブロック内で上書きされてしまう)
console.log(b);    // 3 (ブロック内で上書きされない)

//const c = 5;
//c = 8;        // TypeErrorの練習

//ifの練習
n = 5;
if (n < 10) {
  console.log("Small!");
} else {
  console.log("Big!");
}

n = 2;
switch (n) {
case 1:
  console.log("One");
  break;
case 2:
  console.log("Two");
  break;
case 3:
case 4:
  console.log("Three or Four");
  break;
default:
  console.log("Other");
  break;
}