function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(isArray(['DDDDDDD'])) // true

console.log(isArray(1)) // false
