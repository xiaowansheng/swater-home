/**
 * 配置验证工具函数
 * 用于检查配置字段是否有效（非空、非undefined等）
 */

/**
 * 检查字符串值是否有效
 */
export function isValidString(value: string | undefined | null): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * 检查数组是否有效（非空）
 */
export function isValidArray<T>(arr: T[] | undefined | null): boolean {
  return Array.isArray(arr) && arr.length > 0;
}

/**
 * 检查数字值是否有效（大于0）
 */
export function isValidNumber(value: number | undefined | null): boolean {
  return typeof value === 'number' && value > 0;
}

/**
 * 检查对象是否有效（非空）
 */
export function isValidObject(obj: object | undefined | null): boolean {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj) && Object.keys(obj).length > 0;
}

/**
 * 清理字符串数组，移除空值和纯数字字符串
 */
export function cleanStringArray(arr: string[]): string[] {
  return arr.filter((item) => {
    const text = item.trim();
    return text.length > 0 && !/^\d+$/.test(text);
  });
}
