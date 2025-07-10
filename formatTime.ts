/**
 * 格式化时间
 * @param time 时间，可以是时间戳（毫秒）、Date 对象或日期字符串
 * @param format 格式字符串，如 "yyyy-mm-dd hh:mm:ss"、"yyyy-mm-dd"、"yyyymmdd"
 * @returns 格式化后的时间字符串
 */
function formatTime(time: number | string | Date, format: string): string {
    let date: Date;

    if (time instanceof Date) {
        date = time;
    } else if (typeof time === 'number') {
        date = new Date(time);
    } else if (typeof time === 'string') {
        // 兼容部分格式，尝试转为时间戳
        const timestamp = Date.parse(time);
        if (isNaN(timestamp)) {
            throw new Error('无法识别的时间字符串');
        }
        date = new Date(timestamp);
    } else {
        throw new TypeError('time 参数类型错误');
    }

    const padZero = (n: number, length = 2) => n.toString().padStart(length, '0');

    const replacements: Record<string, string> = {
        'yyyy': date.getFullYear().toString(),
        'yy': date.getFullYear().toString().slice(-2),
        'mm': padZero(date.getMonth() + 1),
        'm': (date.getMonth() + 1).toString(),
        'dd': padZero(date.getDate()),
        'd': date.getDate().toString(),
        'hh': padZero(date.getHours()),
        'h': date.getHours().toString(),
        'MM': padZero(date.getMinutes()),
        'M': date.getMinutes().toString(),
        'ss': padZero(date.getSeconds()),
        's': date.getSeconds().toString(),
    };

    let result = format;

    // 逐个替换所有格式占位符
    for (const key in replacements) {
        result = result.replace(new RegExp(key, 'g'), replacements[key]);
    }

    return result;
}

export default formatTime
