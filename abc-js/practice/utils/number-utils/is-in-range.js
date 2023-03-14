
export function isInRange(num, begin, end) {
  if (typeof num !== 'number' || typeof begin !== 'number' || typeof end !== 'number') throw Error('all parameter is required and must be number type');
  return num >= begin && num <= end;
}
