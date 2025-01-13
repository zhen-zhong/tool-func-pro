/**
 * 将文本复制到剪贴板。
 * 
 * @param {string} text - 需要复制的文本。
 * @returns {boolean} - 如果复制成功，返回 `true`，否则返回 `false`。
 * 
 * 该函数首先尝试使用现代的 Clipboard API 进行复制。如果当前环境不支持 Clipboard API（例如 HTTP 环境或旧浏览器），则退回到创建 `textarea` 元素的方式来进行复制（使用 `document.execCommand`）。
 */
const copyToClipboard = (text: string): boolean => {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
            return true; 
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select(); 
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea); 

            return successful;
        }
    } catch (err) {
        console.error('复制失败:', err);
        return false;
    }
};

export default copyToClipboard
