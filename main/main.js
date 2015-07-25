//function printReceipt(tags) {
var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Pos = require('./model/pos');
var PromotionCalculator = require('./model/promotion-calculator');
var fixtures = require('/home/me/Documents/nodejs/pos_v2/test/fixtures');
var CartItem = require('./model/cart-item');
  tags=[
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
  var scanner = new Scanner();
  var cart = new Cart();

  var pos = new Pos(cart,scanner);
  var cartItems = pos.scan(tags);

  var promotions = fixtures.loadPromotions();
  var amount = cart.calculateAmount();
  var salesCounts = PromotionCalculator.getSalesCounts(promotions,cartItems);
  var salesAmounts = PromotionCalculator.calculateSalesAmount(promotions,cartItems);
  var receipt = pos.printReceipt (cartItems,amount,salesAmounts,salesCounts);

  console.log(receipt);
//}
