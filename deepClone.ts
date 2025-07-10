/**
 * 深拷贝一个对象或数组。
 * 支持基本类型、数组、普通对象、Date、RegExp。
 * 不支持函数、DOM节点、循环引用等特殊对象。
 * @param source 需要深拷贝的源数据
 * @returns 拷贝后的新对象或数组
 */
function deepClone<T>(source: T): T {
    if (source === null || typeof source !== 'object') {
        return source; // 原始类型直接返回
    }

    // 处理日期对象
    if (source instanceof Date) {
        return new Date(source.getTime()) as any;
    }

    // 处理正则对象
    if (source instanceof RegExp) {
        return new RegExp(source.source, source.flags) as any;
    }

    // 处理数组
    if (Array.isArray(source)) {
        const cloneArr = [] as any[];
        for (const item of source) {
            cloneArr.push(deepClone(item));
        }
        return cloneArr as any;
    }

    // 处理普通对象
    const cloneObj = {} as { [key: string]: any };
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            cloneObj[key] = deepClone((source as any)[key]);
        }
    }
    return cloneObj as T;
}

export default deepClone
