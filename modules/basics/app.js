const names = require('./name')
const sayHi = require('./utils')
console.log(names)
const data = require('./alt_util')
console.log(data)
require('./weird.js')


sayHi(names.john)
sayHi(names.susan)