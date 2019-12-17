## 页面加载性能统计指标 - 说明文档

### Navigation Timing API 
所有数据都是根据 Navigation Timing API 计算出来的。
![timingapi](../../help/timingapi.png)
分阶段图:
![timingapi](../../help/timgapi-stage.png)

### 指标细节
```
// 阶段耗时
dnsTime = domainLookupEnd - domainLookupStart   // DNS 解析耗时	
tcpTime = connectEnd - connectStart	            // TCP 连接耗时
ssl  = connectEnd - secureConnectionStart	    // SSL 安全连接耗时	 只在 HTTPS 下有效
ttfb = responseStart - requestStart	            // Time to First Byte（TTFB），网络请求耗时
trans = responseEnd - responseStart	            // 数据传输耗时
domParsingTime = domInteractive - responseEnd	// DOM 解析耗时	
resLoadTime = loadEventStart - domContentLoadedEventEnd	//资源加载耗时, 表示页面中的同步加载资源
onLoadTime = loadEventEnd - loadEventStart      // 前端onload执行时间

//性能指标(上报字段名)
首次渲染(blankTime): fpt = responseEnd - fetchStart
首包时间(fbt): fbt = times.responseStart - times.domainLookupStart
首次主要内容展现时间(fmp): first meaningful paint (目前未实现）
首次可交互(tti): tti = domInteractive - fetchStart
DOM Ready(resourceTime): resourceTime = domContentLoadEventEnd - fetchStart
页面完全加载(finalTime): finalTime = loadEventStart - fetchStart
```


### 参考
[Network Analysis Reference](https://developers.google.com/web/tools/chrome-devtools/network/reference?spm=a2c4g.11186623.2.18.575d2e886jxnGt)
[sitespeed.io](https://github.com/sitespeedio/sitespeed.io)
[page-timing](https://www.npmjs.com/package/page-timing)
[https://www.npmjs.com/package/timing.io](https://www.npmjs.com/package/timing.io)
