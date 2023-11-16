import fs from 'fs'
import { add, sub, mult, div } from './lib/Math.js'

const arg = process.argv.slice(2)
const num1 = Number(arg[0])
const num2 = Number(arg[1])
const fileName = 'Maths_Operations_Result.xlsx'

const data = [
  ['Addition', num1, num2, add(num1, num2)],
  ['Subtraction', num1, num2, sub(num1, num2)],
  ['Multiplication', num1, num2, mult(num1, num2)],
  ['Division', num1, num2, div(num1, num2)],
]

if (fs.existsSync(fileName)) {
} else {
  data.unshift(['Operations', 'Num1', 'Num2', 'Result'])
}

fs.appendFileSync(fileName, data.map((row) => row.join(',')).join('\n') + '\n')
console.log('Results have been added')
