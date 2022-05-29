// 数组去重 使用filter
const obj = {};

var array = [1, 1, "1", "1", {}, {}, obj, obj];

function arrayUnique(arr) {
  const seen = new Map();
  const res = [];
  for (let item of arr) {
    if (!seen.has(item)) {
      res.push(item);
      seen.set(item, 1)
    }
  }
  return Array.from(new Set(arr));
}

console.log(arrayUnique(array));
