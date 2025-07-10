/**
 * 获取 URL 查询参数。
 * - 如果传入字符串 key，则返回该参数值（string | null）。
 * - 如果传入对象 keys，则返回对应参数值的对象。
 * 
 * @param keyOrKeys 参数名字符串或参数名数组对象。
 * @param url URL 字符串，默认当前页面 URL。
 * @returns 单个参数值或多个参数值对象。
 */
function getQueryParam(
    keyOrKeys: string | string[],
    url: string = window.location.href
): string | null | Record<string, string | null> {
    const params = new URL(url).searchParams;

    if (typeof keyOrKeys === 'string') {
        return params.get(keyOrKeys);
    } else if (Array.isArray(keyOrKeys)) {
        const result: Record<string, string | null> = {};
        for (const key of keyOrKeys) {
            result[key] = params.get(key);
        }
        return result;
    } else {
        // 如果传入类型不正确，也可以返回 null 或抛错，这里选择返回 null
        return null;
    }
}
