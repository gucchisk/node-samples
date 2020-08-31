const xpath = require('xpath')
const parser = require('xmldom').DOMParser
const serializer = require('xmldom').XMLSerializer
const fs = require('fs')

const xml = fs.readFileSync('xml/pom.xml').toString()

// const doc = new parser().parseFromString(xmltext)
// // const result = xpath.evaluate(
// //   "/project/version",
// //   doc,
// //   null,
// //   xpath.XPathResult.ANY_TYPE,
// //   null
// // )
// console.log(doc)
// const result = xpath.select('//version', doc)

// console.log(result)

// var xml = "<book>\n  <title>Harry Potter</title>\n</book>"
const doc = new parser().parseFromString(xml)
// const select = xpath.useNamespaces({"pom": "http://maven.apache.org/POM/4.0.0"})
// const result = select('/pom:project/pom:version/text()', doc)
let path = "/*[local-name()='project' and namespace-uri()='http://maven.apache.org/POM/4.0.0']/*[local-name()='version' and namespace-uri()='http://maven.apache.org/POM/4.0.0']"
let result = xpath.select(path, doc)

console.log(result[0].firstChild.nodeValue)

console.log('----------')

const namespace = 'pom'
const value = 'http://maven.apache.org/POM/4.0.0'

const namespaces = {}
namespaces[namespace] = value

const select = xpath.useNamespaces(namespaces)
path = '/pom:project/pom:version'
result = select(path, doc)
console.log(result[0].firstChild.nodeValue)

// console.log(result[0].nodeValue)
// result[0].replaceData(0, result[0].nodeValue.length, '1.0.0')
// result[0].nodeValue = "1.0.0"
// console.log(result[0])

// fs.writeFileSync('xml/pom.xml', new serializer().serializeToString(doc))

