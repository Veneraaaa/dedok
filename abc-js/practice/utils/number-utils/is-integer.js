export function isInteger(value) {
    if (typeof value !== 'number') throw Error('value must be only number type');
    let getInteger = (value % 1 === 0) ? true : false; 
    return getInteger;
}