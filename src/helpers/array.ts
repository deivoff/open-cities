export function deepArrayReverse(array: any, deep = false) {
    let result = array.reverse();
    if (deep) {
        result = result.map((arr: any) => Array.isArray(arr) ? this.deepArrayReverse(arr, true) : arr);
    }
    return result;
}

export function deepStringToNumber(array, deep = false) {
    return array.map((elem) => {
        if (typeof elem === 'string') {
            return Number.parseFloat(elem);
        } else if (Array.isArray(elem) && deep) {
            return deepStringToNumber(elem, true);
        }
    })
}