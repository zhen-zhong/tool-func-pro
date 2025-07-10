/**
 * 精确地将数字进行四舍五入并保留指定小数位数，避免原生 toFixed 的精度问题。
 * @param {number | string} num - 要进行格式化的数字，可以是数字或数字字符串。
 * @param {number} decimals - 需要保留的小数位数，必须为非负整数。
 * @returns {string} 返回格式化后的字符串，保留指定的小数位数。
 * @throws {TypeError} 如果 num 或 decimals 不能转换为有效数字，将抛出类型错误。
 * @throws {RangeError} 如果 decimals 为负数或非整数，或超出允许范围，将抛出范围错误。
 */
function toFixedFix(num: number | string, decimals: number): string {
    const number = Number(num);
    const precision = Number(decimals);

    if (isNaN(number) || isNaN(precision)) {
        throw new TypeError("参数必须是有效数字");
    }
    if (!Number.isInteger(precision) || precision < 0) {
        throw new RangeError("保留的小数位数必须是非负整数");
    }
    if (precision > 100) {
        throw new RangeError("小数位数过大，建议小于等于100");
    }

    const factor = Math.pow(10, precision);
    const rounded = Math.round(number * factor) / factor;

    return rounded.toFixed(precision);
}

export default toFixedFix;
