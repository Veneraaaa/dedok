export function len(text) {
    if (typeof text !== 'string') throw Error('argument must be type of string')
    
    let lenCount = 0;
    for (; text[lenCount] !== undefined; lenCount++) { }
    return lenCount;
}
