import { Calculator } from './calculator';

test('two plus two', () => {
    expect(Calculator(2, 2).add()).toEqual(4);
})

test('five minus three', () => {
    expect(Calculator(5, 3).subtract()).toEqual(2);
});

test('four times five', () => {
    expect(Calculator(4, 5).multiply()).toEqual(20);
});

test('thirty divided by six', () => {
    expect(Calculator(30, 6).divide()).toEqual(5);
});

test('dividing by zero', () => {
    expect(Calculator(10, 0).divide()).toEqual(NaN);
});