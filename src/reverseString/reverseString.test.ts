import { reverseString } from "./reverseString";

interface testCase {
    original: string;
    new: string;
}

const testCases: Record<string, testCase[]> = {
    singleWord: [ 
    {
        original: 'palindrome',
        new: 'emordnilap'
    },
    {
        original: 'cat',
        new: 'tac'
    },
    {
        original: 'dog',
        new: 'god'
    }
    ],
    sentences: [
        {
            original: 'the quick brown fox jumps over the lazy dog',
            new: 'god yzal eht revo spmuj xof nworb kciuq eht'
        },
        {
            original: 'pack my box with five dozen liquor jugs',
            new: 'sguj rouqil nezod evif htiw xob ym kcap'
        },
        {
            original: 'the five boxing wizards jump quickly',
            new: 'ylkciuq pmuj sdraziw gnixob evif eht'
        }
    ]}

test('reverse single words', (): void => {
    testCases.singleWord.forEach(t => 
        expect(reverseString(t.original)).toBe(t.new))
})

test('sentences', (): void => {
    testCases.sentences.forEach(t =>
        expect(reverseString(t.original)).toBe(t.new)
    )
})