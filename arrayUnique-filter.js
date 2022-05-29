// 数组去重 使用filter

var array = [1, 1, "1", "1"];

function arrayUnique(arr) {
  let res = arr.filter((i, index, self) => {
    return self.indexOf(i) === index;
  });

  return res;
}

console.log(arrayUnique(array));
