var CartItem = require('./cart-item');

function PromotionCalculator() {
}

PromotionCalculator.getBuyTwoGetOneFree = function(promotions) {
 
  var promotion = promotions.filter(function(promotion) {
    return promotion.type === 'BUY_TWO_GET_ONE_FREE';
  });
  return promotion[0].barcodes;
};

PromotionCalculator.sale = function (count) {
  return Math.floor(count / 3);
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

module.exports = PromotionCalculator;