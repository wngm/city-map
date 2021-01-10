function myNew(constructor, ...rest) {
  const _constructor = Object.create(constructor.prototype);

  constructor.call(_constructor, ...rest);
  return _constructor;

  obj.__proto__ = constructor.prototype;
  return obj;
  // 请在此处完善代码，不能直接使用 new 操作符
}
function Fun(name, sex) {
  this.name = name;
  this.sex = sex;
}
Fun.prototype.getUserInfo = function () {
  return `我的姓名${this.name},我的性别${this.sex}`;
};

const fun = myNew(Fun, "子君", "男");
// 我的姓名子君，我的性别男
console.log(fun.getUserInfo());
