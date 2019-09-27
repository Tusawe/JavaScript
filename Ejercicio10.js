const array1 = [1, 2, 3, 4]
console.log('array1 ' , array1)
array1[1] = 5
console.log('array1 ' , array1)
const array2 = []
let array3 = array1
console.log('array2 ' , array2)
console.log('array3 ' , array3)
console.log('array1 === array3 ' , array1 === array3)
array3 = array2
console.log('array1 === array3 ' , array1 === array3)