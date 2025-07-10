"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 防抖函数
 * @param fn 需要防抖执行的函数
 * @param delay 延迟时间（毫秒）
 * @returns 防抖后的新函数
 */
function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
            timer = null;
        }, delay);
    };
}
exports.default = debounce;
