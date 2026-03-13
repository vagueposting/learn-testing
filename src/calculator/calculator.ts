export const Calculator = (a: number, b: number) => ({
    add: () => a + b,
    subtract: () => a - b,
    multiply: () => a * b,
    divide: () => b !== 0 ? a / b : NaN
})