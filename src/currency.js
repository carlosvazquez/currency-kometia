module.exports = formatMoney

function formatMoney(price, currency = "MX") {
  if (price == undefined || price == null) {
    return
  }
  let _price = parseInt(price)
  let formatPrice = (_price/= 100).toFixed(2)
  formatPrice = formatPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return `$ ${formatPrice} ${currency}`
}
