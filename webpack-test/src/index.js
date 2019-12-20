/*
 * @Author: your name
 * @Date: 2019-12-19 19:54:34
 * @LastEditTime: 2019-12-19 20:04:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\h5-sdk\src\index.js
 */
import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
