module.exports = formatMoney

function formatMoney(price, currency = "MX") {
  if (price == undefined || price == null) {
    return
  }
  var _price = parseInt(price)
  var formatPrice = (_price/= 100).toFixed(2)
  formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return '$ ' + formatPrice + ' ' + currency
}
