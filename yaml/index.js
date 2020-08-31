const yaml = require('js-yaml')
const fs = require('fs')

try {
  const maven = yaml.safeLoad(fs.readFileSync('yml/maven.yml'))
  console.log(`project type: ${maven.type}`)

  maven.files.forEach(file => {
    console.log(`filetype: ${file.type}`)
    file.xpathes.forEach(xpath => {
      const namespaces = xpath.namespaces
      if (namespaces != undefined) {
	Object.keys(namespaces).forEach(key => {
	  console.log(`namespace: ${key}=${namespaces[key]}`)
	})
      }
      console.log(`path: ${xpath.path}`)
    })
  })

  console.log('----------')
  
  const npm = yaml.safeLoad(fs.readFileSync('yml/npm.yml'))
  console.log(`project type: ${npm.type}`)
  npm.files.forEach(file => {
    console.log(`filetype: ${file.type}`)
    file.queries.forEach(q => {
      console.log(`query: ${q}`)
    })
  })
  
} catch (e) {
  console.log(e)
}
			   
