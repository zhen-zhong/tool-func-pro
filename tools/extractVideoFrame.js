"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 提取视频关键帧为图片（base64 格式）
 * @param file 视频文件（File 类型）
 * @param frameTime 可选，获取第几秒的帧，默认 0 秒
 * @returns Promise<string> Base64 图片（dataURL）
 */
async function extractVideoFrame(file, frameTime = 0) {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const video = document.createElement('video');
        const canvas = document.createElement('canvas');
        video.preload = 'auto';
        video.src = url;
        video.muted = true;
        video.crossOrigin = 'anonymous'; // 防止跨域
        video.currentTime = frameTime;
        video.addEventListener('loadeddata', () => {
            // 确保 seekTime 生效
            video.currentTime = frameTime;
        });
        video.addEventListener('seeked', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                reject(new Error('Canvas 不支持'));
                return;
            }
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const base64 = canvas.toDataURL('image/jpeg');
            URL.revokeObjectURL(url); // 释放资源
            resolve(base64);
        });
        video.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('视频加载失败或不支持的格式'));
        };
    });
}
exports.default = extractVideoFrame;
