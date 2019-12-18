/*
 * @Author: your name
 * @Date: 2019-12-18 17:31:00
 * @LastEditTime: 2019-12-18 17:53:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\咕噜咕噜\TS\枚举.ts
 */
// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
var days;
(function (days) {
    days[days["Sun"] = 0] = "Sun";
    days[days["Mon"] = 1] = "Mon";
    days[days["Tue"] = 2] = "Tue";
    days[days["Wed"] = 3] = "Wed";
    days[days["Thu"] = 4] = "Thu";
    days[days["Fri"] = 5] = "Fri";
    days[days["Sat"] = 6] = "Sat";
})(days || (days = {}));
console.log(days[0] === "Sun");
console.log(days["Sun"] === 1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = "blue".length] = "Blue";
})(Color || (Color = {}));
;
var directions2 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
console.log(Directions.Up);
