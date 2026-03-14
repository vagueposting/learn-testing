import { reverseString } from "./reverseString";

interface testCase {
    original: string;
    expected: string;
}

const testCases: Record<string, testCase[]> = {
    singleWord: [ 
    {
        original: 'palindrome',
        expected: 'emordnilap'
    },
    {
        original: 'cat',
        expected: 'tac'
    },
    {
        original: 'dog',
        expected: 'god'
    }
    ],
    sentences: [
        {
            original: 'the quick brown fox jumps over the lazy dog',
            expected: 'god yzal eht revo spmuj xof nworb kciuq eht'
        },
        {
            original: 'pack my box with five dozen liquor jugs',
            expected: 'sguj rouqil nezod evif htiw xob ym kcap'
        },
        {
            original: 'the five boxing wizards jump quickly',
            expected: 'ylkciuq pmuj sdraziw gnixob evif eht'
        }
    ]}

test('reverse single words', (): void => {
    testCases.singleWord.forEach(t => 
        expect(reverseString(t.original)).toBe(t.expected))
})

test('sentences', (): void => {
    testCases.sentences.forEach(t =>
        expect(reverseString(t.original)).toBe(t.expected)
    )
})