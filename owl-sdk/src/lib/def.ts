import submitPool from '../base/submitPool';
import supper from './supper';
import tools from '../base/tools'
class Def extends supper {
  TYPE:string = 'custom';
  constructor() {
    super();
    //用于去重错误信息;
  }

  /**
   * 错误数据压到错误数据当中
   */
  submitDataPush(collectInfo) {
    let customInfo = tools.assign(collectInfo, this.baseInfo);
    customInfo['type'] = this.TYPE;
    if (collectInfo.constructor.name !== 'Object') {
      customInfo = tools.assign(
        {
          customInfo: collectInfo
        },
        this.baseInfo
      );
    }
    submitPool.pushDatas(customInfo);
  }
  /**
   * 开始错误信息收集
   */
  init(win_, baseInfo_) {
    super.init(win_, baseInfo_);
  }
}
let def=new Def();
export default def;
