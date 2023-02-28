// --------------- for tests ------------------

export const complexText = "Hello world!!! It's terminator";

export const ZERO_CODE_CHAR = String.fromCharCode(0);

export function checkError(firstText, secondText) {
   if (typeof firstText !== 'string' && typeof secondText !== 'string') throw Error('argument must be type of string')
}
