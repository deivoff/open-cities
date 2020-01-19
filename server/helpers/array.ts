import isString from 'lodash/isString';

export const isArrayExist = (elem: any): boolean => {
  return Array.isArray(elem) && !!elem.length;
};

export const deepArrayReverse = (array: any, deep = true) => {
  let result = array.reverse();
  if (deep) {
    result = result.map((arr: any) => (isArrayExist(arr) ? deepArrayReverse(arr, true) : arr));
  }
  return result;
};

export const deepStringToNumber = (array: any, deep = true) => {
  return array.map((elem: any) => {
    if (isString(elem)) {
      return Number.parseFloat(elem);
    } else if (isArrayExist(elem) && deep) {
      return deepStringToNumber(elem, true);
    }
  });
};
