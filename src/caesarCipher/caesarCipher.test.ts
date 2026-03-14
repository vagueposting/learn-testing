import { caesarCipher } from "./caesarCipher";

interface testCase {
    original: string;
    expected: string;
}

test('Encode single word', () =>
    {
        const testWords: testCase[] = [
            {
                original: 'Flower',
                expected: 'Iorzhu'
            },
            {
                original: 'Salad',
                expected: 'Vdodg'
            },
            {
                original: 'Honeybee',
                expected: 'Krqhbehh'
            }
        ]

        testWords.forEach((test) => {
            const { original, expected } = test;

            expect(caesarCipher(original)).toBe(expected)
        })
    }
);

test('Sentences', () => {
    const sentences: testCase[] = [
        {
            original: 'The quick brown fox jumps over the lazy dog.',
            expected: 'Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj.'
        },
        {
            original: 'Pack my box with five dozen liquor jugs.',
            expected: 'Sdfn pb era zlwk ilyh grchq oltxru mxjv.'
        },
        {
            original: 'The five boxing wizards jump quickly.',
            expected: 'Wkh ilyh eralqj zlcdugv mxps txlfnob.'
        }
    ]

    sentences.forEach((test) => {
            const { original, expected } = test;

            expect(caesarCipher(original)).toBe(expected)
        })
})