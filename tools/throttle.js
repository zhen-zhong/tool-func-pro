"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 节流函数
 * @param fn 需要节流执行的函数
 * @param interval 时间间隔（毫秒）
 * @returns 节流后的新函数
 */
function throttle(fn, interval) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}
exports.default = throttle;
