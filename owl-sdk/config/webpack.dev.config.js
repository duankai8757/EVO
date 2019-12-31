const path = require("path");
const uglify = require("uglifyjs-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");
const proxy = require("http-proxy-middleware");
const package = require("../package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let typeMap = {
  dev: "development",
  prod: "production"
};
let type = process.argv[3].replace("--", "");
module.exports = {
  //mode: "development", //production
  // mode: 'development',
  devtool: '#source-map',
  mode: typeMap[type],//typeMap[type],
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: `owl-sdk-${package.version}.js`,
    library: "owl",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // new uglify(),
    new htmlPlugin({
      minify: {
        //是对html文件进行压缩
        removeAttributeQuotes: true //removeAttrubuteQuotes是却掉属性的双引号。
      },
      hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
      template: "./src/index.html" //是要打包的html模版路径和文件名称。
    }),
    new BundleAnalyzerPlugin()
  ],
    
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    host: "0.0.0.0",
    compress: true,
    port: 9999,
    proxy: {
      "/log/performance": {
        target: "http://192.168.48.20:8888/log/performance",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/log/fe": ""
        }
      },
      "/report": {
        // api表示当前项目请求的key
        target: "http://127.0.0.1:3000", // 代理服务器路径
        pathRewrite: { "^/report": "/report" }, // 重写路径
        changeOrigin: true
      },
      "/reports": {
        // api表示当前项目请求的key
        target: "http://127.0.0.1:3000", // 代理服务器路径
        pathRewrite: { "^/reports": "/reports" }, // 重写路径
        changeOrigin: true
      }
    }
  }
};
