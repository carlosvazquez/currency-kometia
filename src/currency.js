"use strict";

module.exports = formatMoney;
/**
 * Returns value in currency format.
 * @param {number|string} value
 * @returns {string}
 */
function formatMoney(value) {
  if (value == undefined || value == null) {
    return undefined;
  }
  var _currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "MX";
  var _price = parseInt(value);
  var _formatPrice = (_price /= 100).toFixed(2);
  _formatPrice = _formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$ " + _formatPrice + " " + _currency;
}
