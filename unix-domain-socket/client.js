const net = require('net')
const socket = net.createConnection('/tmp/sample.sock')

socket.on('connect', () => {
  console.log('connected')
})

socket.on('error', (error) => {
  console.log('error:' + error)
})

socket.on('data', (data) => {
 console.log(`receive: ${data.toString()}`)
})

socket.on('close', () => {
 console.log('socket close')
})

const message = 'hello'
socket.write(message);
console.log(`send: ${message}`)

