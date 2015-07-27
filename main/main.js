exports.printReceipt = function(tags) {
var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Pos = require('./model/pos');
var PromotionCalculator = require('./model/promotion-calculator');
var fixtures = require('../test/fixtures');
var CartItem = require('./model/cart-item');

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
}

