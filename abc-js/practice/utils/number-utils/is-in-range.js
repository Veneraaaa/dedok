import { checkNumber } from "../string-utils/common.js";

export function isInRange(num, begin, end) {
  checkNumber(num);
  checkNumber(begin);
  checkNumber(end);
  if (num >= begin && num <= end) return true;
  return false;
}
