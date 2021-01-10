function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}

async function sum(...rest) {
  if (rest.length <= 1) {
    return rest[0] || 0;
  }
  let porimises = [];

  for (let i = 0; i < rest.length; i += 2) {
    if (rest[i + 1] === undefined) {
      porimises.push(
        new Promise((resolve) => {
          resolve(rest[i]);
        })
      );
    } else {
      porimises.push(
        new Promise((resolve, reject) => {
          asyncAdd(rest[i], rest[i + 1], async (x, s) => {
            resolve(s);
          });
        })
      );
    }
  }
  let result = await Promise.all(porimises);
  console.log(result, 2222);

  return await sum(...result);

  // 请在此处完善代码
}
console.time();
// let start = window.performance.now();
sum(1, 2, 3, 4, 5, 6).then((res) => {
  // 请保证在调用sum方法之后，返回结果21
  console.log(res);
  console.timeEnd();
  //   console.log(`程序执行共耗时: ${window.performance.now() - start}`);
});
