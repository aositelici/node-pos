var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Pos = require('./model/pos');
var PromotionCalculator = require('./model/promotion-calculator');
var fixtures = require('../spec/fixtures');
var CartItem = require('./model/cart-item');

printReceipt = function(tags) {

  var scanner = new Scanner();
  var cart = new Cart();

  var pos = new Pos(cart,scanner);
  tags.forEach(function(tag) {
    pos.scan(tag);
  });

  var cartItems = cart.getCartItems();
  var promotions = fixtures.loadPromotions();

  var receipt = pos.printReceipt (cartItems,promotions);

  console.log(receipt);
}

exports.printReceipt = printReceipt;

