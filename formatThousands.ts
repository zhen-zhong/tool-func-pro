/**
 * 将数字格式化为带千分符的字符串。
 * @param num - 需要格式化的数字或数字字符串。
 * @returns 格式化后的字符串，例如 1234567.89 => "1,234,567.89"
 */
function formatThousands(num: number | string): string {
    if (num === null || num === undefined) return '';

    // 转字符串，去除空白
    const str = String(num).trim();

    // 校验是否为有效数字
    if (!/^(-?\d+)(\.\d+)?$/.test(str)) return '';

    // 分割整数和小数部分
    const [integerPart, decimalPart] = str.split('.');

    // 给整数部分添加千分符
    const withThousands = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return decimalPart ? `${withThousands}.${decimalPart}` : withThousands;
}
