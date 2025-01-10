/**
 * 将文件转换为 Base64 编码的字符串。
 * @param {File} file - 需要转换的文件对象。
 * @returns {Promise<string>} 返回一个 Promise，当转换完成时解析为 Base64 字符串。
 */
const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};

export default getBase64;
