const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const dist = path.resolve(__dirname, "../dist/");

// 获取路径下所有文件 地址
function getFiles(jsonPath) {
  let jsonFiles = [];
  function findJsonFile(ppath) {
    let files = fs.readdirSync(ppath);
    files.forEach(function (item, index) {
      let fPath = path.join(ppath, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
      }
    });
  }
  findJsonFile(jsonPath);

  return jsonFiles;
}

// 路径数据 格式化
function FilesFormat(files, rootPath) {
  let filesJsonList = files.map((item) => {
    let file_name = item
      .slice(rootPath.length + 1)
      .replace(/(.*\/)*([^.]+).js/gi, "$1$2");
    return { name: file_name, path: item };
  });

  return filesJsonList;
}

// 获取所有page 文件路径
let pageFiles = getFiles(path.resolve(__dirname, "../src/page"));

let list = FilesFormat(pageFiles, path.resolve(__dirname, "../src/page"));

let entry = {};
list.forEach((item) => {
  entry[item.name] = item.path;
});

module.exports = {
  entry,
  output: {
    path: dist,
    //直接输出完整路径
    filename: "[name].[hash:8].js",
    //动态输出文件名，以chunk名命名
  },
  plugins: [
    ...list.map(
      (i) =>
        new HtmlWebpackPlugin({
          filename: i.name + ".html",
          template: path.resolve(__dirname, "../public/index.html"),
          inject: true,
          chunks: [i.name],
        })
    ),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "../public/static"), to: "static" },
      ],
    }),
  ],
};

var s = {
  entry: { a: "a.js", b: "b.js" },
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "dist"),
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: i.name + ".html",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
      chunks: [i.name],
    }),
    new HtmlWebpackPlugin({
      filename: i.name + ".html",
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
      chunks: [i.name],
    }),
  ],
};
