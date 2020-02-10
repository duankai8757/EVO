
if (typeof Object.assignTest != "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assignTest", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      "use strict";
      debugger;
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      let to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (let nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            console.log(Object.prototype.hasOwnProperty.call(nextSource, nextKey))
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            console.log(Object.prototype.hasOwnProperty.call(nextSource, nextKey))

              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assignTest(obj1, obj2);
console.log(obj3);
console.log(obj1);
