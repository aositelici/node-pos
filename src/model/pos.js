var Receipt = require('./receipt');
var ReceiptItem = require('./receipt-item');

function Pos(cart, scanner) {

  this.scanner = scanner;
  this.cart = cart;
  this.receipt = undefined;
  this.subTotals = [];
  this.discounts = [];
  this.totalAmount = 0;
  this.savedAmount = 0;

}
Pos.prototype.scan = function (tag) {

  var cartItem = this.scanner.scan(tag);
  if (cartItem) {
    this.cart.addCartItem(cartItem);
  }
};

Pos.prototype.printReceipt = function () {

  this.getSubtotals();
  this.getDiscounts();
  this.getTotalAmount();
  this.getSavedAmount();

  var cartItems = this.cart.cartItems;

  this.receipt = new Receipt(cartItems, this.subTotals, this.totalAmount, this.savedAmount);
  return this.receipt.printReceipt();

};

Pos.prototype.getSubtotals = function () {

  var _this = this;
  var cartItems = this.cart.cartItems;

  cartItems.forEach(function (cartItem) {
    var receiptItem = new ReceiptItem(cartItem);
    _this.subTotals.push(receiptItem.getActualSubTotal());
  });

};

Pos.prototype.getDiscounts = function () {

  var _this = this;
  var cartItems = this.cart.cartItems;

  cartItems.forEach(function (cartItem) {
    var receiptItem = new ReceiptItem(cartItem);
    _this.discounts.push(receiptItem.discount);
  });

};

Pos.prototype.getTotalAmount = function () {

  var _this = this;

  this.totalAmount = _this.subTotals.reduce(function (a, b) {
    return a + b;
  });
};

Pos.prototype.getSavedAmount = function () {

  var _this = this;

  this.savedAmount = _this.discounts.reduce(function (a, b) {
    return a + b;
  });
};

module.exports = Pos;

