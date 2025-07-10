"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 简易版序列化对象为查询字符串，数组格式为 key[]=value1&key[]=value2
 * @param obj 需要序列化的对象
 * @returns 查询字符串
 */
function simpleQsStringify(obj) {
    const parts = [];
    for (const key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key))
            continue;
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach(val => {
                parts.push(`${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`);
            });
        }
        else if (value !== undefined && value !== null) {
            parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
        // 这里简单不处理嵌套对象和复杂结构
    }
    return parts.join('&');
}
exports.default = simpleQsStringify;
