"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 深拷贝一个对象或数组。
 * 支持基本类型、数组、普通对象、Date、RegExp。
 * 不支持函数、DOM节点、循环引用等特殊对象。
 * @param source 需要深拷贝的源数据
 * @returns 拷贝后的新对象或数组
 */
function deepClone(source) {
    if (source === null || typeof source !== 'object') {
        return source; // 原始类型直接返回
    }
    // 处理日期对象
    if (source instanceof Date) {
        return new Date(source.getTime());
    }
    // 处理正则对象
    if (source instanceof RegExp) {
        return new RegExp(source.source, source.flags);
    }
    // 处理数组
    if (Array.isArray(source)) {
        const cloneArr = [];
        for (const item of source) {
            cloneArr.push(deepClone(item));
        }
        return cloneArr;
    }
    // 处理普通对象
    const cloneObj = {};
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            cloneObj[key] = deepClone(source[key]);
        }
    }
    return cloneObj;
}
exports.default = deepClone;
