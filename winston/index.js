const { createLogger, format, transports, stream, Logger } = require('winston')
const Transport = require('winston-transport')
const { combine, timestamp, label, prettyPrint } = format
const fs = require('fs')

class CustomTransport extends Transport {
  constructor() {
    super()
    // this.on('logged', (info) => {
    //   console.log('event logged')
    //   console.log(info)
    // })
  }
  log(info, callback) {
    setImmediate(() => {
      console.log(this.eventNames())
      const result = this.emit('logged', info)
      if (result) {
        console.log('success')
      }
    })
    // console.log('custom transport:')
    console.log(info)
    console.log(callback)
    if (callback) {
      callback()
    }
  }
}

class MyConsole extends transports.Console {
  constructor(opts = {}) {
    super(opts)
  }
}

const customFormat = format((info, opts = {}) => {
  console.log('custom format:')
  console.log(info)
  console.log(opts)
  return false
})

const customTransport = new CustomTransport()

const Writable = require('stream').Writable;

class MyWritable extends Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk);
    callback()
  }
}
const st = new MyWritable()
const logger = createLogger({
  level: 'debug',
  // format: combine(
  //   label({ label: 'label' }),
  // timestamp(),
  // prettyPrint()
  // customFormat()
  // ),
  transports: [
    // new transports.Console({format: customFormat()}),
    // new MyConsole(),
    // customTransport,
    new transports.Console(),
    new transports.Stream({
      // stream: fs.createWriteStream('/dev/null')
      stream: st
    })
  ],
})

logger.stream().on('data', (log) => {
  console.log('log')
})

logger.debug('hello')
