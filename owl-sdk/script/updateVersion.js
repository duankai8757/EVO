const fs = require("fs");
const path = require("path");

const PACKAGE_PATH = path.join(__dirname, "../package.json");
const README_PATH = path.join(__dirname, "../readme.md");
const mainValue = "dist/owl-sdk-version.js";
let version = 0;

/**
 * 日期格式化
 * @param {*} fmt
 * @param {*} date
 */
const dateFormat = function(fmt, date) {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

let readFile = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", function(err, data) {
      if (err) {
        reject(`error:${err}`);
      } else {
        resolve(data);
      }
    });
  });
};

readFile(PACKAGE_PATH)
  .then(packageData => {
    if (packageData) {
      let jd = JSON.parse(packageData);
      jd["main"] = mainValue.replace("version", jd.version);
      fs.writeFileSync(PACKAGE_PATH, JSON.stringify(jd, null, 4));
      version = jd.version;
      return readFile(README_PATH);
    }
  })
  .then(readMeData => {
    let d = new Date();
    let dStr = dateFormat("yyyy-MM-dd", new Date());
    let modifyText = process.argv[2];
    readMeData = readMeData.replace(
      /`next`/g,
      `\`${dStr} ${version} ${modifyText}  \`   \r\n\`next\``
    );
    fs.writeFileSync(README_PATH, readMeData);
    return readFile(`../dist/owl-sdk-${version}.js`);
  })
  .then(sdkData => {
    sdkData = sdkData.replace("_sdkVersion_", version);
    fs.writeFileSync(`../dist/owl-sdk-${version}.js`, sdkData);
  })
  .catch(err => {
    console.log(err);
  });
