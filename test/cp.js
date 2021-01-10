var s = {
  a: "111",
  b: "222",
  e: {
    a: 1,
    b: "bb",
  },
  fn: function () {
    console.log(this.a);
  },
  fc: () => {
    console.log(this.b);
  },
};

var c = Object.assign({}, s);
console.dir(s);
c.a = "aaaaa";
c.e.a = "aaaaa";
c.fc = "fnfnfnfn";
console.log(s, c);

var obj = { name: "Poly", career: "it" };
Object.defineProperty(obj, "age", { value: "forever 18", enumerable: false });
Object.prototype.protoPer1 = function () {
  console.log("proto");
};
Object.prototype.protoPer2 = 2;
console.log("For In : ");
for (var a in obj) console.log(a);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(JSON.parse(JSON.stringify(obj)));
console.log(obj.__proto__);
