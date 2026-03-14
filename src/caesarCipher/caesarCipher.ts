import { alphabet, letterSet, stringPiece } from './caesarTypes'

export const caesarCipher = (str: string, shift = 3): string => {
    const shiftArrayForward = (arr: Record<string, [string, string]>[], n: number): 
        Record<string, [string, string]>[] => {
        return arr.slice(n).concat(arr.slice(0, -n));
    }

    const splitString = (str: string): stringPiece[] => {
        return str.split('').map(L => (
            {
                letter: L, 
                capitalized: (L >= 'A') && (L <= 'Z')
            }
        ));
    };

    const shiftStringForward = (str: string, alphabet: alphabet): string => {     
        // chop the string into an array
        const letters = splitString(str);
        const shiftedLetters = [];
        const { original, shifted } = alphabet;

        // L.keys[0] = gets the single property key
        // letters[i].letter.toUpperCase() = the letter itself
        // so it's basically checking if the key matches.

        for (let i = 0; i < letters.length; i++) {
            const pos = original.findIndex(L => L.letter[0] === letters[i].letter.toUpperCase());

            if (pos !== -1) {
                const newLetter = shifted[pos] as Record<string, [string, string]>;
                shiftedLetters.push(
                    letters[i].capitalized 
                    ? newLetter.letter[0] 
                    : newLetter.letter[1]
                );
            } else {
                shiftedLetters.push(letters[i].letter); 
            }
        };

        return shiftedLetters.join(''); // Placeholder
    };

    // generate an all caps alphabet
    const baseABC = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + i));

    // map the base alphabet
    const alphabet: alphabet = {
        original: baseABC.map(letter => 
            ({ 
                letter: [
                String(letter), 
                String(letter).toLowerCase()
                ]
            })),
        shifted: []
    }

    // then generate the shifted alphabet
    alphabet.shifted = shiftArrayForward(alphabet.original, shift);

    return shiftStringForward(str, alphabet); // Placeholder
}