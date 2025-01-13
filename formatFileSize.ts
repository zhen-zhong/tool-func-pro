/**
 * 将文件大小（字节数）格式化为可读的文件大小单位。
 * 
 * @param {number} sizeInBytes - 文件大小，单位为字节（Bytes）。
 * @returns {string} - 返回格式化后的文件大小字符串，单位可以是 Bytes、KB、MB 或 GB。
 * 
 * 该函数根据文件大小的字节数，将其转换为更易读的格式：
 * - 如果文件小于 1024 字节，返回 `Bytes` 单位；
 * - 如果文件大小介于 1024 字节和 1MB 之间，返回 `KB` 单位；
 * - 如果文件大小介于 1MB 和 1GB 之间，返回 `MB` 单位；
 * - 如果文件大小大于或等于 1GB，返回 `GB` 单位。
 * 数值会保留两位小数。
 */
const formatFileSize = (sizeInBytes: number): string => {
    if (sizeInBytes < 1024) {
        return sizeInBytes + ' Bytes';
    } else if (sizeInBytes < 1024 * 1024) {
        return (sizeInBytes / 1024).toFixed(2) + ' KB';
    } else if (sizeInBytes < 1024 * 1024 * 1024) {
        return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
    } else {
        return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    }
};


export default formatFileSize