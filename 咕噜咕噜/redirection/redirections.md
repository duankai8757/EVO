<!--
 * @Author: your name
 * @Date: 2019-12-20 11:23:58
 * @LastEditTime : 2019-12-20 11:24:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\咕噜咕噜\redirection\redirections.md
 -->
## HTML 重定向机制
HTTP 协议中重定向机制是应该优先采用的创建重定向映射的方式，但是有时候 Web 开发者对于服务器没有控制权，或者无法对其进行配置。针对这些特定的应用情景，Web 开发者可以在精心制作的 HTML 页面的 <head>  部分添加一个 <meta> 元素，并将其 http-equiv 属性的值设置为 refresh 。当显示页面的时候，浏览器会检测该元素，然后跳转到指定的页面。

```
<head> 
  <meta http-equiv="refresh" content="0;URL=http://www.example.com/" />
</head>
```
content 属性的值开头是一个数字，指示浏览器在等待该数字表示的秒数之后再进行跳转。建议始终将其设置为  **0** 来获取更好的可访问性。

显然，该方法仅适用于 HTML 页面（或类似的页面），然而并不能应用于图片或者其他类型的内容。

[link](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections)