/*
 * @Author: your name
 * @Date: 2019-12-15 15:36:16
 * @LastEditTime: 2019-12-16 17:28:01
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \EVO\fre\src\h.js
 */
export function h(type, attrs) {
  let props = attrs || {}
  let key = props.key || null
  let ref = props.ref || null
  let children = []

  for (let i = 2; i < arguments.length; i++) {
    debugger
    let vnode = arguments[i]
    if (vnode == null || vnode === true || vnode === false) {
    } else if (typeof vnode === 'string' || typeof vnode === 'number') {
      children.push(createText(vnode))
    } else {
      children.push(vnode)
    }
  }

  if (children.length) {
    props.children = children.length === 1 ? children[0] : children
  }

  delete props.key
  delete props.ref

  return { type, props, key, ref }
}

export function createText(vnode) {
  return { type: 'text', props: { nodeValue: vnode } }
}
