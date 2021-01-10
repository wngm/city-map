/**
 自定义instanceof 
*/
function instanceOf(left, right) {
  if (left.__proto__ === right.prototype) {
    return true;
  }

  if (left.__proto__.__proto__ === right.prototype) return false;
  // 请完善以下代码，不能使用原生instanceof

  return true;
}

class A {}
class B extends A {}
class C {}

const b = new B();
// 输出 true
console.log(instanceOf(b, B));
// 输出 true
console.log(instanceOf(b, A));
// 输出 false
console.log(instanceOf(b, C));
