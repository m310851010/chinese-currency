
/**
 * 中文大写金额转数字
 * @param amountStr 中文大写金额
 * @returns 对应的数字
 * @example chineseCurrency('壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾元壹角贰分叁厘肆毫') ==> 1234567890.1234
 */
export function chineseCurrency(amountStr: string): number {
    const digitMap: Record<string, number> = {  零: 0, 壹: 1, 贰: 2, 叁: 3, 肆: 4, 伍: 5, 陆: 6, 柒: 7, 捌: 8, 玖: 9 };
    const unitMap: Record<string, number> = { 元: 1, 角: 1000, 分: 100,  厘: 10, 毫: 1,拾: 10, 佰: 100, 仟: 1000, 万: 10000, 亿: 100000000, 兆: 1000000000000 };
    let total = 0, unit = 1, base = 1, index = -1, percentTotal = 0, percent = true;
    for (let i = amountStr.length - 1; i  >= 0; i--) {
        const char = amountStr.charAt(i);
        if (char === '整') continue;
        if (char in unitMap) {
            unit = unitMap[char];
            if (char === '兆' || char === '亿'  || char === '万') {
                base = i === index - 1 ? (base * unit) : unit;
                unit = 1;
                index = i;
            }
            if (char === '元') percent = false;
            continue;
        }
        if (percent) {
            percentTotal += digitMap[char] * unit * base;
        } else {
            total += digitMap[char] * unit * base;
        }
    }
    return total + (percentTotal / 10000);
}
