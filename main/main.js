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
tags.forEach(function(tag) {
  pos.scan(tag);
});

var cartItems = cart.getCartItems();
var promotions = fixtures.loadPromotions();
var amount = cart.calculateAmount();

var receipt = pos.printReceipt (cartItems,amount,promotions);

console.log(receipt);
}

