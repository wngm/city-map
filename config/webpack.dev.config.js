var webpack = require("webpack");
var webpackBase = require("./webpack.base.config.js");

var cfg = Object.assign(webpackBase, {
  devtool: "source-map",
});
//entry
Object.getOwnPropertyNames(webpackBase.entry || {}).map(function (name) {
  cfg.entry[name] = []
    //添加webpack-dev-server客户端
    .concat("webpack-dev-server/client?http://localhost:9091")
    .concat(webpackBase.entry[name]);
});

module.exports = cfg;
