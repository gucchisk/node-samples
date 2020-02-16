import perf from 'perf_hooks'
import { stringToIntNumber,
	 stringToIntNumberWithRadix,
	 stringToIntParseInt,
	 stringToIntParseIntWithRegex,
	 stringToIntParseIntEach } from './index'
const performance = perf.performance
const PerformanceObserver = perf.PerformanceObserver
let results = []

const observer = new PerformanceObserver((list, observer) => {
  results.push(list.getEntries()[0])
})
observer.observe({ entryTypes: ['measure'], buffered: false })

const numStr = '123456789'
const loopCount = 100000

performance.mark('Number:start')
const numStrPrefix = '0x' + numStr
for (let i of Array(loopCount).keys()) {
  stringToIntNumber(numStrPrefix)
}
performance.mark('Number:end')
for (let i of Array(loopCount).keys()) {
  stringToIntNumberWithRadix(numStr, 16)
}
performance.mark('NumberWithRadix:end')
for (let i of Array(loopCount).keys()) {
  stringToIntParseInt(numStr, 16)
}
performance.mark('ParseInt:end')
for (let i of Array(loopCount).keys()) {
  stringToIntParseIntWithRegex(numStr, 16)
}
performance.mark('ParseIntWithRegex:end')
for (let i of Array(loopCount).keys()) {
  stringToIntParseIntEach(numStr, 16)
}
performance.mark('ParseIntEach:end')

performance.measure('Number', 'Number:start', 'Number:end')
performance.measure('NumberWithRadix', 'Number:end', 'NumberWithRadix:end')
performance.measure('ParseInt', 'NumberWithRadix:end', 'ParseInt:end')
performance.measure('ParseIntWithRegex', 'ParseInt:end', 'ParseIntWithRegex:end')
performance.measure('ParseIntEach', 'ParseIntWithRegex:end', 'ParseIntEach:end')

const spacePadding = (str, len) => {
  for (let i of Array(len).keys()) {
    str = str + " "
  }
  return str.substr(0, len)
}

const compareResult = (a, b) => {
  let comparison = 0
  if (a.duration > b.duration) {
    comparison = 1
  } else if (a.duration < b.duration) {
    comparison = -1
  }
  return comparison
}
results.sort(compareResult)
results.forEach((result) => {
  console.log(spacePadding(result.name, 18) + ": " + result.duration)
})

performance.clearMarks()
performance.clearMeasures()
