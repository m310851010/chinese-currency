import { chineseCurrency } from "../lib/chinese-currency"

/**
 * chineseCurrency test
 */
describe("Dummy test", () => {

  it("test 壹角贰分叁厘肆毫", () => {
    expect(chineseCurrency('壹角贰分叁厘肆毫')).toBe(0.1234)
  })

  it("test 肆毫", () => {
    expect(chineseCurrency('肆毫')).toBe(0.0004)
  })

  it("test 肆毫", () => {
    expect(chineseCurrency('肆毫')).toBe(0.0004)
  })

  it("test 叁厘", () => {
    expect(chineseCurrency('叁厘')).toBe(0.003)
  })

  it("test 零元整", () => {
    expect(chineseCurrency('零元整')).toBe(0)
  })

  it("test 壹拾元整", () => {
    expect(chineseCurrency('壹拾元整')).toBe(10)
  })

  it("test 壹拾贰万叁仟肆佰伍拾陆元整", () => {
    expect(chineseCurrency('壹拾贰万叁仟肆佰伍拾陆元整')).toBe(123456)
  })

  it("test 壹拾伍元整", () => {
    expect(chineseCurrency('壹拾伍元整')).toBe(15)
  })

  it("test 壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾元整", () => {
    expect(chineseCurrency('壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾元整')).toBe(1234567890)
  })

  it("test 玖佰万元整", () => {
    expect(chineseCurrency('玖佰万元整')).toBe(9000000)
  })

  it("test 伍佰元整", () => {
    expect(chineseCurrency('伍佰元整')).toBe(500)
  })

  it("test 伍佰亿元零肆毫", () => {
    expect(chineseCurrency('伍佰亿元零肆毫')).toBe(50000000000.0004)
  })

  it("test 玖仟万元整", () => {
    expect(chineseCurrency('玖仟万元整')).toBe(90000000)
  })

  it("test 伍佰万元整", () => {
    expect(chineseCurrency('伍佰万元整')).toBe(5000000)
  })
})
