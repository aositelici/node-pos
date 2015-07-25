var CartItem = require('./cart-item');
function PromotionCalculator() {

}
PromotionCalculator.getBuyTwoGetOneFree = function(promotions) {
  for (var i = 0; i < promotions.length; i++) {
    var promotion =promotions[i];
    if (promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      return promotion.barcodes;
    }
  }
};

PromotionCalculator.sale = function (count) {
  return Math.floor(count / 3);
};
PromotionCalculator.getSalesCounts = function (promotions, cartItems) {
  var salesCounts = [];

  for (var i = 0; i < cartItems.length; i++) {
    salesCounts.push(this.calculateSalesCount(promotions, cartItems[i]));
  }

  return salesCounts;
};

PromotionCalculator.calculateSalesCount = function (promotions, cartItem) {
  var barcodes = this.getBuyTwoGetOneFree(promotions);
  var salesCount = 0;

  for (var i = 0; i < barcodes.length; i++) {
    if (cartItem.item.barcode === barcodes[i]) {
      salesCount = this.sale(cartItem.count);
      break;
    }
  }

  return salesCount;
};
PromotionCalculator.calculateSalesAmount = function (promotions,cartItems) {
  var salesAmounts = [];
  var salesCounts = this.getSalesCounts(promotions, cartItems);
  for (var i = 0; i < cartItems.length; i++) {
    salesAmounts.push((cartItems[i].item.price)*salesCounts[i]);
  }

  return salesAmounts;
};

module.exports = PromotionCalculator;