"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 将文件转换为 Base64 编码的字符串。
 * @param {File} file - 需要转换的文件对象，必须是浏览器环境中的 File 实例。
 * @returns {Promise<string>} 返回一个 Promise，当转换成功时解析为 Base64 字符串。
 * @throws {TypeError} 如果传入的不是有效的 File 对象。
 */
function getBase64(file) {
    return new Promise((resolve, reject) => {
        if (!(file instanceof File)) {
            return reject(new TypeError("参数必须是 File 类型"));
        }
        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            if (typeof result === "string") {
                resolve(result);
            }
            else {
                reject(new Error("文件读取失败，结果不是字符串"));
            }
        };
        reader.onerror = () => {
            var _a;
            reject((_a = reader.error) !== null && _a !== void 0 ? _a : new Error("文件读取出错"));
        };
        reader.readAsDataURL(file);
    });
}
exports.default = getBase64;
