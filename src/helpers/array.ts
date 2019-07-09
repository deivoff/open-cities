export const deepArrayReverse = (array: any, deep = true) => {
  let result = array.reverse();
  if (deep) {
    result = result.map((arr: any) => (Array.isArray(arr) ? this.deepArrayReverse(arr, true) : arr));
  }
  return result;
}

export const deepStringToNumber = (array, deep = true) => {
  return array.map(elem => {
    if (typeof elem === 'string') {
      return Number.parseFloat(elem);
    } else if (Array.isArray(elem) && deep) {
      return deepStringToNumber(elem, true);
    }
  });
}

export const isArrayExist = (elem: any): boolean => {
  return Array.isArray(elem) && !!elem.length;
}