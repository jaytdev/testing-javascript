const sum = (a, b) => a + b
const subtract = (a, b) => a - b

const result = sum(3, 7)
const expected = 10

const sumAsync = (...args) => Promise.resolve(sum(...args))
const subtractAsync = (...args) => Promise.resolve(subtract(...args))

module.exports = {sum, subtract, sumAsync, subtractAsync}