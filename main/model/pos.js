var Receipt = require('./receipt');

function Pos(cart,scanner) {

  this.scanner = scanner;
  this.cart = cart  ;
  this.receipt = undefined;
}
Pos.prototype.scan = function(tag) {
 
  var cartItem = this.scanner.scan(tag);
  if(cartItem) {
    this.cart.addCartItem(cartItem);
  }
};

Pos.prototype.printReceipt = function(cartItems,amount,promotions){

  this.receipt = new Receipt(cartItems,amount,promotions);
  return this.receipt.printReceipt();

};


module.exports = Pos;

