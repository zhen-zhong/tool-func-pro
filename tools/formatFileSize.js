"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将文件大小（字节数）格式化为更易读的字符串形式。
 *
 * @param {number} sizeInBytes - 文件大小，单位为字节（Bytes）。
 * @returns {string} - 返回格式化后的文件大小字符串，单位为 Bytes、KB、MB 或 GB。
 *
 * 转换逻辑：
 * - 小于 1024 字节：返回 Bytes；
 * - 小于 1MB：返回 KB；
 * - 小于 1GB：返回 MB；
 * - 其余返回 GB。
 * 所有单位保留两位小数。
 *
 * @throws {TypeError} 如果传入的不是数字。
 * @throws {RangeError} 如果传入的是负数。
 */
function formatFileSize(sizeInBytes) {
    if (typeof sizeInBytes !== 'number' || isNaN(sizeInBytes)) {
        throw new TypeError("参数必须是有效数字");
    }
    if (sizeInBytes < 0) {
        throw new RangeError("文件大小不能为负数");
    }
    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;
    if (sizeInBytes < KB) {
        return `${sizeInBytes} Bytes`;
    }
    else if (sizeInBytes < MB) {
        return `${(sizeInBytes / KB).toFixed(2)} KB`;
    }
    else if (sizeInBytes < GB) {
        return `${(sizeInBytes / MB).toFixed(2)} MB`;
    }
    else {
        return `${(sizeInBytes / GB).toFixed(2)} GB`;
    }
}
exports.default = formatFileSize;
