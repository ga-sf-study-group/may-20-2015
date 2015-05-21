var division = require('./additionland').division
console.log(division(10,5) === 2)
console.log(division(0,5) === 0)
console.log(division(10,2) === 5)
console.log(division(10,10) === 1)


console.log(division(-10,5) === -2)
console.log(division(0,5) === 0)
console.log(division(10,-2) === -5)
console.log(division(-10,-10) === 1)

console.log(division(1,0) === Infinity)
console.log(division(-1,0) === -Infinity)

