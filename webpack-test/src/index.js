/*
 * @Author: your name
 * @Date: 2020-01-02 14:10:30
 * @LastEditTime : 2020-01-02 14:47:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\webpack-test\src\index.js
 */
import _ from "lodash";
import printMe from "./print.js";
function component() {
  let element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
