var PromotionCalculator = require('./promotion-calculator');

function ReceiptItem(promotions,cartItem) {

  this.cartItem = cartItem;
  this.discount = this.cartItem.item.price*PromotionCalculator.calculateSalesCount (promotions, cartItem) ;
}

ReceiptItem.prototype.getActualSubTotal = function() {
  return this.cartItem.getSubTotal() - this.discount;
}

module.exports = ReceiptItem;
