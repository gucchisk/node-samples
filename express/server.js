const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
  const sock = req.socket
  const raddr = sock.remoteAddress
  const rport = sock.remotePort
  res.send(`remote address: ${raddr}:${rport}`)
})

app.listen(port, () => {
  console.log(`server start (port: ${port})`)
})
