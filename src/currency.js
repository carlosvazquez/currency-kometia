"use strict";

module.exports = formatMoney;

function formatMoney(price) {
  var currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "MX";

  if (price == undefined || price == null) {
    return;
  }
  var _price = parseInt(price);
  var formatPrice = (_price /= 100).toFixed(2);
  formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$ " + formatPrice + " " + currency;
}
