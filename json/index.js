const fs = require('fs')

const obj = JSON.parse(fs.readFileSync('json/package.json'))

const q = '.version'

const version = eval(`obj${q}`)

console.log(`version: ${version}`)
