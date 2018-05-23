/*eslint-disable */
const assert = require("chai").assert;
const formatMoney = require("../src/currency");

const CURRENCY = 'MX'
const result = "$ 1,000.00 MX"

describe("formating number to currency", () => {
  it("should exist formarMoney function", () => {
    assert.isFunction(formatMoney, "formarMoney is a function");
  });
  it("should return $ 1,000.00 MX when pass 100000 without currency", () => {
    const currency = formatMoney(100000)
    assert.equal(currency, result)
  })
  it("should return $ 1,000.00 when pass 100000 with currency", ()=> {
    const currency = formatMoney(100000, 'USD')
    const result = "$ 1,000.00 USD"
    assert.equal(currency, result);
  })
  it("should return $ 1,000.00 MX when pass 100000 as string", () => {
    const currency = formatMoney("100000", CURRENCY);
    assert.equal(currency, result);
  })
  it("should return undefined when not pass param", () => {
    const value = undefined;
    const currency = formatMoney(value, CURRENCY);
    assert.isUndefined(value, "value is `null` or `undefined`");
    assert.equal(currency, undefined);
  })
  it('should return type string', ()=> {
    const currency = formatMoney(23000)
    assert.typeOf(currency, 'string')
  })
})
