export const Capitalize = (word: string): string => {
    const letters = word.split('');

    letters[0] = letters[0].toUpperCase()

    return letters.join('');
}