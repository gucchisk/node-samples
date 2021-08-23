const { createLogger, format, transports } = require('winston')
const Transport = require('winston-transport')
const { combine, timestamp, label, prettyPrint } = format

class CustomTransport extends Transport {
  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info)
    })
    console.log('custom transport:')
    console.log(info)
    if (callback) {
      callback()
    }
  }
}

const customFormat = format((info, opts = {}) => {
  console.log('custom format:')
  console.log(info)
  return info
})

const logger = createLogger({
  // level: 'debug',
  format: combine(
    label({ label: 'label' }),
    timestamp(),
    // prettyPrint()
    customFormat()
  ),
  transports: [
    // new transports.Console(),
    new CustomTransport()
  ],
})

logger.debug('hello')
