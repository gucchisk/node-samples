import { benchmark } from '@thi.ng/bench'

const fib1 = (n) => {
  let a = 0
  let b = 1
  let c
  for (let i = 0; i < n; i++) {
    c = a
    a = b
    b = a + c
  }
  return a
}

const fib2 = (n) => {
  if (n == 0) return 0
  return fib2(n - 1) + n
}

benchmark(() => fib1(10000))
benchmark(() => fib2(10000))
