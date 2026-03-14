export type letterSet = Record<string, [string, string]>[];

export interface alphabet {
    original: letterSet;
    shifted: string[] | letterSet;
}

export type stringPiece = { letter: string, capitalized: boolean };