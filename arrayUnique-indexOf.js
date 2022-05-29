// 数组去重 - indexOf

var array = [1, 1, "1", "1"];

function arrayUnique(arr) {
  let res = [];
  for (let i of arr) {
    if (!res.includes(i)) {
      res.push(i);
    }
  }

  return res;
}

console.log(arrayUnique(array));
