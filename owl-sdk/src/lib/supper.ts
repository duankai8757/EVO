import submitPool from "../base/submitPool";

class supper {
  win: Object = window;
  baseInfo: Object = {};
  constructor() {}
  /**
   * 错误上报提交处理
   */
  submit() {
    submitPool.start();
  }
  /**
   * 开始错误信息收集
   */
  init(win, baseInfo) {
    this.win = win || window;
    this.baseInfo = baseInfo;
  }
}
export default supper;
