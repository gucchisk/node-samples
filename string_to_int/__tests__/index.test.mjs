import { stringToIntNumber,
	 stringToIntNumberWithRadix,
	 stringToIntParseInt,
	 stringToIntParseIntWithRegex,
	 stringToIntParseIntEach } from '../index'

test('strintToIntNumber', () => {
  expect(stringToIntNumber('0x123456789')).toBe(0x123456789)
  expect(() => {
    stringToIntNumber('0x123456789x')
  }).toThrow()
})
test('stringToIntNumberWithRadix', () => {
  expect(stringToIntNumberWithRadix('123456789', 16)).toBe(0x123456789)
  expect(() => {
    stringToIntNumberWithRadix('123456789x', 16)
  }).toThrow()
})
test('stringToIntParseInt', () => {
  expect(stringToIntParseInt('123456789', 16)).toBe(0x123456789)
  expect(() => {
    stringToIntParseInt('123456789x', 16)
  }).toThrow()
})
test('stringToIntParseIntWithRegex', () => {
  expect(stringToIntParseIntWithRegex('123456789', 16)).toBe(0x123456789)
  expect(() => {
    stringToIntParseIntWithRegex('123456789x', 16)
  }).toThrow()
})
test('stringToIntParseIntEach', () => {
  expect(stringToIntParseIntEach('123456789', 16)).toBe(0x123456789)
  expect(() => {
    stringToIntParseIntEach('123456789x', 16)
  }).toThrow()
})
