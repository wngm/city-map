function getWays(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  if (n >= 3) {
    return getWays(n - 1) + getWays(n - 2);
  }
}

function getWay(n) {
  var arr = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr[i] = 1;
      continue;
    }

    if (i === 2) {
      arr[i] = 2;
    }

    if (i >= 3) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[n];
}

function getWayM(n, m) {
  if (n < 1 || m < 1) {
    return 0;
  }
  let arr = new Array(n + 1).fill(new Array(m + 1).fill(0));
  arr[1][1] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) {
        arr[i][j] = 1;
        continue;
      }
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }
  return arr[n][m];
}

// console.log(getWayM(4, 4));
var uniquePathsWithObstacles = function (arr) {
  // arr为二维数组，m为行，n为列
  let n = arr.length,
    m = arr[0].length;
  let temp = [];

  // 初始化将格子填充为0
  for (let i = 0; i < n; i++) {
    temp[i] = Array(m).fill(0);
  }

  // 如果起始或终止目标有障碍物，则直接返回0
  if (arr[0][0] == 1 || arr[n - 1][m - 1] == 1) {
    return 0;
  }

  // 遍历二维数组的列数
  for (i = 0; i < n; i++) {
    // 遍历二维数组的行数
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) {
        temp[i][j] = 1;
        // 第一种边界情况：1行n列
      } else if (i == 0) {
        if (arr[i][j] != 1 && temp[i][j - 1] != 0) {
          temp[i][j] = 1;
        } else {
          temp[i][j] = 0;
        }
        // 第二种边界情况： m行1列
      } else if (j == 0) {
        if (arr[i][j] != 1 && temp[i - 1][j] != 0) {
          temp[i][j] = 1;
        } else {
          temp[i][j] = 0;
        }
      } else if (arr[i][j] != 1) {
        // 如果不是上述的两种边界情况，终止条件的到达方式是i-1,j和i,j-1的和
        temp[i][j] = temp[i - 1][j] + temp[i][j - 1];
      }
    }
  }
  return temp[n - 1][m - 1];
};

uniquePathsWithObstacles(4, 4);
