import tools from "../base/tools";
/**
 * dom observer，可以实现dom变化通知我们，然后我们队这次dom做标记（打tag），
 * 并记录这一次tag对应的时间（performance.now()或者自己减去开始时间），这样每一次变更的时间就存储起来了。
 * 然后深入每个dom以及其子节点 计算得分（得分规则：首屏区域比重肯定高，等等）
 */
const performance = window.performance;
// @ts-ignore
const MutationObserver = window.MutationObserver;
/**
 * 统计中需要忽略标签
 */
const IGNORE_TAG_SET: Array<string> = ["SCRIPT", "STYLE", "META", "HEAD", "LINK"];
/**
 * 元素权重
 * 因为我们不希望图片元素权重过大（权重大代表FMP计算会认为其实主角）
 * 所以目前设定为全部1
 */
const TAG_WEIGHT_MAP = {
    SVG: 1,
    IMG: 1,
    CANVAS: 1,
    OBJECT: 1,
    EMBED: 1,
    VIDEO: 2
};
// 统计起点时间
let START_TIME = 0;
try{
    START_TIME = performance.timing.fetchStart ;
}catch (e) {
    START_TIME = Date.now();
}
/**
 * 停止 observe时间
 */
const LIMIT = 10000;
const WW = window.innerWidth;
const WH = window.innerHeight;
const VIEWPORT_AREA = WW * WH;
const DELAY = 500;
// dom标记
const TAG_FLAG = 'o_c';
const location = window.location;

class FMPTiming {
    statusCollector = [];
    flag: boolean = true;
    muo = MutationObserver;
    observer = null;
    callbackCount = 1;
    mp = {};

    constructor() {
        this.muo && this.initObserver();
    }

    initObserver():void {
        this.firstSnapshot();
        tools.log('initObserver')
        this.observer = new MutationObserver(() => {
            let t = Date.now()- START_TIME ;
            let bodyTarget = document.body;
            if (bodyTarget) {
                this.doTag(bodyTarget, this.callbackCount++);
            }
            this.statusCollector.push({t});
        });
        this.observer.observe(document, {
            childList: true,
            subtree: true
        });
        // todo   window beforeunload 必须结束统计
    }

    getFMP():any {
        const me = this;
        // @ts-ignore
        return new Promise(function (resolve, rejet) {
            if (document.readyState === "complete") {
                me.checkCanCal(START_TIME) ?
                    setTimeout(() => {
                        resolve(me.calFinallScore())
                    }, DELAY) : resolve(me.calFinallScore());
            } else {
                window.addEventListener("load", () => {
                    resolve(me.getFMP());
                }, true);
            }
        });
    }

    firstSnapshot():void {
        let t = Date.now()- START_TIME;
        let bodyTarget = document.body;

        if (bodyTarget) {
            this.doTag(bodyTarget, this.callbackCount++);
        }
        this.statusCollector.push({
            t
        });
    }

    initResourceMap():void {
        performance.getEntries().forEach(item => {
            this.mp[item.name] = item['responseEnd'];
        });
    }

    /**
     * 对dom标记
     * @param target
     * @param callbackCount
     */
    doTag(target, callbackCount):void {
        let tagName = target.tagName;

        if (IGNORE_TAG_SET.indexOf(tagName) === -1) {
            let childrenLen = target.children ? target.children.length : 0;
            if (childrenLen > 0) {
                for (let childs = target.children, i = childrenLen - 1; i >= 0; i--) {
                    if (childs[i].getAttribute(TAG_FLAG) === null) {
                        childs[i].setAttribute(TAG_FLAG, callbackCount);
                    }
                    this.doTag(childs[i], callbackCount);
                }
            }
        }
    }

    calFinallScore() :number{
        let fmp = -1;
        let me = this;
        if (MutationObserver && this.flag) {
            me.observer.disconnect();
            me.flag = false;
            let res = me.deepTraversal(document.body);
            let tp = {
                'st': undefined,
                'els': [],
                'dpss': [],
            };
            res.dpss.forEach(item => {
                if (tp && tp.st) {
                    if (tp.st < item.st) {
                        tp = item;
                    }
                } else {
                    tp = item;
                }
            });
            // console.log(tp, this.statusCollector);
            // @ts-ignore
            // this.initResourceMap();

            let resultSet = this.filterTheResultSet(tp.els);

            let fmpTiming = this.calResult(resultSet);
            fmp = Number(fmpTiming.toFixed(0));
            tools.log(`FMP: ${fmp}`);
        }
        return fmp;
    }

    /**
     * 计算结果 取集合里面最大值
     * @param resultSet
     */
    calResult(resultSet: any): number {
        let rt = -1;
        resultSet.forEach(item => {
            let t = 0;
            let index = +item.node.getAttribute(TAG_FLAG) - 1;
            t = this.statusCollector[index].t;
            // if (item.weight === 1) {
            //
            // }
            // 目前所有元素weight都是1 不会遇到以下逻辑
            // else if (item.weight === 2) {
            //     if (item.node.tagName === "IMG") {
            //         t = this.mp[item.node.src];
            //     } else if (item.node.tagName === "SVG") {
            //         let index = +item.node.getAttribute(TAG_FLAG) - 1;
            //         t = this.statusCollector[index].t;
            //     } else {
            //         //background image
            //         let match = tools.getStyle(item.node, 'background-image')
            //             .match(/url\(\"(.*?)\"\)/);
            //
            //         let s;
            //         if (match && match[1]) {
            //             s = match[1];
            //         }
            //         if (s && s.indexOf("http") == -1) {
            //             s = location.protocol + match[1];
            //         }
            //         t = this.mp[s];
            //     }
            // } else if (item.weight === 4) {
            //     if (item.node.tagName === "CANVAS") {
            //         let index = +item.node.getAttribute(TAG_FLAG) - 1;
            //         t = this.statusCollector[index].t;
            //     } else if (item.node.tagName === "VIDEO") {
            //         t = this.mp[item.node.src];
            //
            //         !t && (t = this.mp[item.node.poster]);
            //     }
            // }
            rt < t && (rt = t);
        });
        return rt;
    }

    /**
     * 过滤出大于平均值的
     * @param els
     */
    filterTheResultSet(els: any): any {
        let sum = 0;
        els.forEach(item => {
            sum += item.st;
        });

        let avg = sum / els.length;

        return els.filter(item => {
            return item.st > avg;
        });
    }

    deepTraversal(node): any {
        if (node) {
            let dpss = [];
            for (let i = 0, child; (child = node.children[i]); i++) {
                let s = this.deepTraversal(child);
                if (s.st) {
                    dpss.push(s);
                }
            }

            return this.calScore(node, dpss);
        }
        return {};
    }
    // 计算得分
    calScore(node, dpss): object {
        let {width, height, left, top, bottom, right} = node.getBoundingClientRect();
        let f = 1;

        if (WH < top || WW < left) {
            // 不在可视viewport中 得分0
            f = 0;
        }

        let sdp = 0;
        dpss.forEach(item => {
            sdp += item.st;
        });
        // 所有权重都是1
        let weight = 1; //TAG_WEIGHT_MAP[node.tagName] || 1;
        // if (weight === 1 &&
        //     tools.getStyle(node, 'background-image') &&
        //     tools.getStyle(node, 'background-image') !== "initial") {
        //     weight = 1 //TAG_WEIGHT_MAP["IMG"]; // 将有图片背景的普通元素 权重设置为img
        // }
        // 计算得分
        let st = width * height * weight * f;

        let els = [{node, st, weight}];

        let areaPercent = this.calAreaPercent(node);
        // st*面积占比 获得最终得分
        if (sdp > st * areaPercent || areaPercent === 0) {
            st = sdp;
            els = [];

            dpss.forEach(item => {
                els = els.concat(item.els);
            });
        }

        return {
            dpss,
            st,
            els
        };
    }

    // 检查是否可以停止设置observer dom
    checkCanCal(start): boolean {
        let ti = Date.now() - start;
        return !(
            ti > LIMIT ||
            ti - ((this.statusCollector && this.statusCollector.length &&
            this.statusCollector[this.statusCollector.length - 1].t) || 0)
            > 1000);
    }

    /**
     * 计算元素在可视区面积占比
     * @param node
     */
    calAreaPercent(node):number {
        let {left, right, top, bottom, width, height} = node.getBoundingClientRect();
        let wl = 0;
        let wt = 0;
        let wr = WW;
        let wb = WH;

        let overlapX =
            right - left + (wr - wl) - (Math.max(right, wr) - Math.min(left, wl));
        if (overlapX <= 0) {
            //x 轴无交点
            return 0;
        }

        let overlapY =
            bottom - top + (wb - wt) - (Math.max(bottom, wb) - Math.min(top, wt));
        if (overlapY <= 0) {
            return 0;
        }

        return (overlapX * overlapY) / (width * height);
    }
}

export default FMPTiming;
