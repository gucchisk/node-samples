const crypto = require('crypto')
const fs = require('fs')

console.log('--- RSA ---')

{
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
  })

  const publicKeyStr = publicKey.export({
    type: 'pkcs1',
    format: 'pem',
  })

  const privateKeyStr = privateKey.export({
    type: 'pkcs1',
    format: 'pem',
  })

  fs.writeFileSync('rsa_pub.pem', publicKeyStr)
  fs.writeFileSync('rsa.pem', privateKeyStr)

  console.log('publicKey:')
  console.log(publicKeyStr)
  console.log('privateKey:')
  console.log(privateKeyStr)
}

const publicKey = fs.readFileSync('rsa_pub.pem')

const data = "hello world"


// var { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// })

// console.log('publicKey: ', publicKey)

var encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_NO_PADDING, // or RSA_PKCS1_PADDING,RSA_PKCS1_OAEP_PADDING
  },
  Buffer.from(data)
)

console.log(`cipher text(base64): ${encryptedData.toString('base64')}`)

const privateKey = fs.readFileSync('rsa.pem')

var decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_NO_PADDING,
  },
  encryptedData
)
console.log("plain text: ", decryptedData.toString())

// console.log('--- RSA ---')
