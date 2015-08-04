var CartItem = require('./cart-item');
var fixtures = require('../../spec/fixtures');

function PromotionCalculator() {
}

PromotionCalculator.getBuyTwoGetOneFree = function() {
 
  var promotions = fixtures.loadPromotions();

  var promotion = promotions.filter(function(promotion) {
    return promotion.type === 'BUY_TWO_GET_ONE_FREE';
  });
 
  return promotion[0].barcodes;
};

PromotionCalculator.sale = function (count) {
  return Math.floor(count / 3);
};

PromotionCalculator.calculateSalesCount = function (cartItem) {

  var barcodes = this.getBuyTwoGetOneFree();
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