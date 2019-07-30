"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayExist = (elem) => {
    return Array.isArray(elem) && !!elem.length;
};
exports.deepArrayReverse = (array, deep = true) => {
    let result = array.reverse();
    if (deep) {
        result = result.map((arr) => exports.isArrayExist(arr) ? exports.deepArrayReverse(arr, true) : arr);
    }
    return result;
};
exports.deepStringToNumber = (array, deep = true) => {
    return array.map((elem) => {
        if (typeof elem === 'string') {
            return Number.parseFloat(elem);
        }
        else if (exports.isArrayExist(elem) && deep) {
            return exports.deepStringToNumber(elem, true);
        }
    });
};
//# sourceMappingURL=array.js.map