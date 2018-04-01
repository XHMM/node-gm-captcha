import  {getRanNum,getFromRange} from '../src/utility'

describe('工具函数测试',()=>{
    test('返回四位不固定数字组成的字符串',()=>{
        expect(getRanNum(4)).toHaveLength(4)
    });
    test('返回 [-5,5] 区间的任意整数',()=>{
        expect(getFromRange(-5,5)).toBeLessThanOrEqual(5);
        expect(getFromRange(-5,5)).toBeGreaterThanOrEqual(-5);
    });
});
