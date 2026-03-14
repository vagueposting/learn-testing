interface analysis {
    average: number
    min: number
    max: number
    length: number
}

export const analyzeArray = (array: number[]): analysis => {
    return {
        average: array.reduce((a, c) => a + c) / array.length,
        min: array.sort()[0],
        max: array.sort((a,b) => b - a)[0],
        length: array.length
    }
}