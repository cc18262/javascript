
var n = 0;{
while (n < 10) {
  console.log(n);
  n++;
}
}

var n = 0;{
do {
  console.log(n);
  n++;
} while (n < 10);
}

for (i = 0; i < 10; i++) {
  console.log(i);
}

xx = [ "Blue", "Red", "Yellow" ];
for (i in xx) {
  console.log(xx[i]);
}

var data = { name: "Yamada", age: 26, country: "Japan" };
for (var d in data) {
  console.log(d, data[d]);
}


var set = new Set();
set.add("Tanaka");
set.add("Suzuki");
for (var value of set) {
  console.log(value);
}