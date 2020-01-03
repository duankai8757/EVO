/*
 * @Author: your name
 * @Date: 2020-01-02 14:10:30
 * @LastEditTime : 2020-01-03 10:41:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\webpack-test\src\index.js
 */
import _ from "lodash";
import printMe from "./print.js";

// import './styles.css';

function component() {
  let element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "点击这里，然后查看 1111console！";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  });
}
