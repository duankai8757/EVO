<!--
 * @Author: your name
 * @Date: 2019-12-16 16:21:33
 * @LastEditTime: 2019-12-16 16:24:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\咕噜咕噜\rollup.md
 -->
# rollup
### 特性:
       - rollup 所有资源放同一个地方，一次性加载,利用 tree-shake特性来  剔除未使用的代码，减少冗余
       - webpack 拆分代码、按需加载  webpack2已经逐渐支持tree-shake
   1.  rollup:  
     1.打包你的 js 文件的时候如果发现你的无用变量，会将其删掉。
     2.可以将你的 js 中的代码，编译成你想要的格式
   2.  webpack:  
    1.代码拆分
    2.静态资源导入（如 js、css、图片、字体等）
    拥有如此强大的功能，所以 webpack 在进行资源打包的时候，就会产生很多冗余的代码。
    
```项目（特别是类库）只有 js，而没有其他的静态资源文件，使用 webpack 就有点大才小用了，因为 webpack bundle 文件的体积略大，运行略慢，可读性略低。这时候 rollup就是一种不错的解决方案```

作者：Speng
链接：https://www.jianshu.com/p/ac977a5f651c
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处.