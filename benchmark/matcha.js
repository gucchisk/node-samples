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

suite('Suite', () => {
  set('iterations', 10000000)
  set('delay', 100)
  set('concurrency', 2)
  bench('bench2', () => {
    fib1(100)
  })
  bench('bench3', () => {
    fib1(100)
  })
  bench('bench3', () => {
    fib1(100)
  })
  bench('bench4', () => {
    fib2(100)
  })
  bench('bench5', () => {
    fib2(100)
  })
})
