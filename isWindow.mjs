// 判断是否为window对象
function isWindow(obj) {
  return obj != null && obj === obj.window;
}

export { isWindow };

/**
 * 但是实际上这个方法没法处理伪造的window对象
 * 例如const m = {}
 * m.window = m
 * isWindow(m)  // true
 */
