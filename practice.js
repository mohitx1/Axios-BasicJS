const x='hello world'

console.log(x.substring(0,4).toUpperCase())

const arr= new Array(1,2,3,'hello',true);
arr.unshift('apple')
// new Array('apple',1,2,3,'hello',true)
console.log(arr)
console.log(Array.isArray(arr))
console.log(Array.isArray('arr'))
console.log(arr.indexOf('hello'))