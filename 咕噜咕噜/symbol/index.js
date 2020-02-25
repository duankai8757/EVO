/*
 * @Author: duankai
 * @Date: 2020-02-12 14:11:10
 * @LastEditTime : 2020-02-12 14:18:57
 * @LastEditors  : Please set LastEditors
 * @Description:常用的消除魔术字符串的方法，就是把它写成一个变量。
 * 上面代码中，我们把Triangle写成shapeType对象的triangle属性，这样就消除了强耦合。
 * 如果仔细分析，可以发现shapeType.triangle等于哪个值并不重要，只要确保不会跟其他shapeType属性的值冲突即可。因此，这里就很适合改用 Symbol 值。
 */

const shapeType = {
  triangle: Symbol()
};

function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
