// https://juejin.cn/post/6844903846779551751#heading-7
// 该类型判断函数可以判断六种基本数据类型以及Boolean Number String Function Array Date RegExp Object Error，
// 其他类型因为遇到类型判断的情况较少所以都会返回object,不在进行详细的判断
//  比如ES6新增的Symbol，Map，Set等类型
var classtype = {};

"Boolean Number String Function Array Date RegExp Object Error"
  .split(" ")
  .map(function (item) {
    classtype["[object " + item + "]"] = item.toLowerCase();
  });

function typeJudgeUniversal(obj) {
  return typeof obj === "function" || typeof obj === "object"
    ? classtype[Object.prototype.toString.call(obj)] || "object"
    : typeof obj;
}

export {
  typeJudgeUniversal as type
}

// console.log("typeJudegeUniversal Date", typeJudgeUniversal(new Date()));
// console.log("typeJudegeUniversal Array", typeJudgeUniversal([]));
// console.log("typeJudegeUniversal String", typeJudgeUniversal(new String('22')));
// console.log("typeJudegeUniversal Function", typeJudgeUniversal(() => {}));
