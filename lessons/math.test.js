const {sum, subtract} = require('../math')

test('sum adds numbers', () => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})

test('subtract subtracts numbers', () => {
    const result = subtract(7, 3)
    expect(result).toBe(4)
})