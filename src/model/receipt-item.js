var PromotionCalculator = require('./promotion-calculator');

function ReceiptItem(cartItem) {

  this.cartItem = cartItem;
  this.discount = this.cartItem.item.price * PromotionCalculator.calculateSalesCount(cartItem);
}

ReceiptItem.prototype.getActualSubTotal = function () {
  return this.cartItem.getSubTotal() - this.discount;
};

module.exports = ReceiptItem;
