// es5及之前的版本
function isNaNes5(data) {
  // 因为全局的isNaN会先将非数值类型转换为数组类型，再去判断转换后的结果是不是一个NaN
  return typeof data === "number" && isNaN(data);
}

console.log("es5 date", isNaNes5(new Date()));
console.log('es5 NaN', isNaNes5(NaN));

// es6及之后
function isNaNes6(data) {
  return Number.isNaN(data);
}

console.log("es6", isNaNes6(new Date()));
console.log('es6 NaN', isNaNes6(NaN));

