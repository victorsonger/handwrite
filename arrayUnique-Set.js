// 数组去重 使用filter

var array = [1, 1, "1", "1"];

function arrayUnique(arr) {
  return Array.from(new Set(arr));
}

console.log(arrayUnique(array));
