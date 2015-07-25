var Receipt = require('./receipt');

function Pos(cart,scanner) {
  this.scanner = scanner;
  this.cart = cart  ;
  this.receipt = undefined;
}
Pos.prototype.scan = function(tags) {
  var _this = this;
  tags.forEach(function(tag) {
    var cartItem = _this.scanner.scan(tag);
    _this.cart.addCartItem(cartItem);
  });

  return _this.cart.getCartItems();
};

Pos.prototype.printReceipt = function(cartItems,amount,salesAmounts,salesCounts){

  this.receipt = new Receipt(cartItems,amount,salesAmounts,salesCounts);
  return this.receipt.printReceipt();

};

module.exports = Pos;

