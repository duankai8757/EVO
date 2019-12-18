/*
 * @Author: your name
 * @Date: 2019-12-18 17:31:00
 * @LastEditTime: 2019-12-18 17:51:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \EVO\咕噜咕噜\TS\枚举.ts
 */


// 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。


enum days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(days[0] === "Sun");
console.log(days["Sun"] === 1);


enum Color {Red, Green, Blue = "blue".length};

// enum Color1 {Red = "red".length, Green, Blue};

//常亮枚举
const enum Directions2 {
    Up,
    Down,
    Left,
    Right
}

let directions2 = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 外部枚举
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];