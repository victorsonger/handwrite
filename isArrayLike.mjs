// 判断是否为类数组
import { isWindow } from "./isWindow.mjs";
import { type } from "./typeJudge-universal.mjs";

export function isArrayLike(data) {
  const length = data?.length;

  const typeRes = type(data);

  if (isWindow(data) || typeRes === "function") {
    return false;
  }

  return (
    typeRes === "array" ||
    length === 0 ||
    (typeof length === "number" && length > 0 && length - 1 in data)
  );
}

console.log(isArrayLike({0: 'aa', 1: 'ddd', length: 2}))