import { Capitalize } from "./capitalize";

test('single lowercase word', () => {
    expect(Capitalize('flower')).toBe('Flower');
    expect(Capitalize('dog')).toBe('Dog');
    expect(Capitalize('egg')).toBe('Egg')
})

test('nothing happens to a capitalized word', () => {
    expect(Capitalize('Flower')).toBe('Flower');
    expect(Capitalize('Dog')).toBe('Dog');
    expect(Capitalize('Egg')).toBe('Egg');
})

test('sentences', () => {
    expect(Capitalize('the quick brown fox jumps over the lazy dog')).toBe(
        'The quick brown fox jumps over the lazy dog'
    )
})