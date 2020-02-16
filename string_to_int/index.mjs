export const stringToIntNumber = (str) => {
  const num = Number(str)
  if (isNaN(num)) {
    throw new Error('invalid string')
  }
  return num
}

export const stringToIntNumberWithRadix = (str, radix) => {
  let prefix = ''
  switch (radix) {
  case 2:
    prefix = '0b'
    break
  case 8:
    prefix = '0o'
    break
  case 10:
    break
  case 16:
    prefix = '0x'
    break
  }
  let num = Number(prefix + str)
  if (isNaN(num)) {
    throw new Error('invalid string')
  }
  return num
}

export const stringToIntParseInt = (str, radix) => {
  const num = parseInt(str, radix)
  if (num.toString(radix).length !== str.length) {
    throw new Error('invalid string')
  }
  return num
}

export const stringToIntParseIntWithRegex = (str, radix) => {
  let pattern
  switch (radix) {
  case 2:
    pattern = /^[01]+$/
    break
  case 8:
    pattern = /^[0-7]+$/
    break
  case 10:
    pattern = /^[0-9]+$/
    break
  case 16:
    pattern = /^[0-9a-f]+$/
    break
  }
  const match = str.match(pattern)
  if (match == null) {
    throw new Error('invalid string')
  }
  return parseInt(str, radix)
}

export const stringToIntParseIntEach = (str, radix) => {
  let num = 0
  for (let i = 0; i < str.length; i++) {
    const n = parseInt(str[i], radix)
    if (isNaN(n)) {
      throw new Error('invalid string')
    }
    num = num * radix + n
  }
  return num
}
