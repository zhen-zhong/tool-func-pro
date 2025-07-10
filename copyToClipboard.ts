/**
 * 将文本复制到剪贴板。
 *
 * 该函数优先使用现代的 Clipboard API（异步），
 * 如果不可用，则使用兼容性较好的 `textarea + execCommand` 方式。
 *
 * @param {string} text - 需要复制的文本，不能为空字符串。
 * @returns {Promise<boolean>} - 复制成功返回 true，失败返回 false。
 */
function copyToClipboard(text: string): Promise<boolean> {
    return new Promise((resolve) => {
        if (typeof text !== 'string') {
            console.error('copyToClipboard: 参数必须是字符串');
            resolve(false);
            return;
        }

        if (!text) {
            // 空字符串可以视为成功（无实际内容）
            resolve(true);
            return;
        }

        // 现代 Clipboard API 支持且安全上下文
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                resolve(true);
            }).catch((err) => {
                console.warn('Clipboard API 复制失败，尝试备用方案', err);
                fallbackCopy(text, resolve);
            });
        } else {
            fallbackCopy(text, resolve);
        }

        // 备用方案：textarea + execCommand
        function fallbackCopy(text: string, callback: (success: boolean) => void) {
            try {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                // 避免页面滚动和样式破坏
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

                callback(successful);
            } catch (err) {
                console.error('execCommand 复制失败:', err);
                callback(false);
            }
        }
    });
}

export default copyToClipboard;
