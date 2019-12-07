const net = require('net')

net.createServer((socket) => {
  console.log('client connected.')
  socket.on('data', data => {
    console.log(`recieve: ${data}`)
    const message = `receive ${data}`
    socket.write(message)
    console.log(`return: ${message}`)
  })
  socket.on('close', () => {
    console.log('close')
  })
}).listen('/tmp/sample.sock')
