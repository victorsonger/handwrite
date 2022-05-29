// 判断是否空对象（或者非对象）

// 掘金原文的方法，但是这个没法处理属性为Symbol的情况
// function isEmptyObject( obj ) {
//   var name;
//   for ( name in obj ) {
//       return false;
//   }
//   return true;
// }

// 我自己的方法，可以处理Symbol
// 问题是，对象仅有不可枚举的属性时，也会被视作非空
// 例如空数组 []， 其实自身有一个不可枚举属性length
// 对于这种特殊情况，是要作为空对象还是非空对象处理
// 只能视需求而定
// 重点是理解原理即可
function isEmptyObject(obj) {
  try {
    return Reflect.ownKeys(obj).length === 0;
  } catch (err) {
    console.log("报错，说明传进来的obj根本不是一个对象，则直接返回true");
    return true;
  }
}

console.log(isEmptyObject({})); // true
console.log(isEmptyObject([])); // 第一种方法 true ；  第二种方法 false
console.log(isEmptyObject(null)); // true
console.log(isEmptyObject(undefined)); // true
console.log(isEmptyObject(1)); // true
console.log(isEmptyObject("")); // true
console.log(isEmptyObject(true)); // true
