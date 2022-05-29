// 数组去重 - 排序后去重

var array = [1, 1, "1", "1"];

function arrayUnique(arr) {
  return [...arr].sort().filter((item, index, self) => item !== self[index - 1])

}

console.log(arrayUnique(array));
