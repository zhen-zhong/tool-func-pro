/**
 * 节流函数
 * @param fn 需要节流执行的函数
 * @param interval 时间间隔（毫秒）
 * @returns 节流后的新函数
 */
function throttle<T extends (...args: any[]) => any>(fn: T, interval: number): (...args: Parameters<T>) => void {
    let lastTime = 0;

    return function (...args: Parameters<T>) {
        const now = Date.now();

        if (now - lastTime >= interval) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}
