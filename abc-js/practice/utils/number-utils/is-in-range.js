
export function isInRange(num, begin, end) {
  if (typeof num !== 'number') throw Error('all parameter is required and must be number type')
  if (typeof begin !== 'number') throw Error('all parameter is required and must be number type')
  if (typeof end !== 'number') throw Error('all parameter is required and must be number type')
  return num >= begin && num <= end;
}
