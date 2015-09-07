function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function (inputCartItem) {

  var cartItem = this.findCartItem(inputCartItem);
  if (cartItem) {
    cartItem.count += inputCartItem.count;
  }
  else {
    this.cartItems.push(inputCartItem);
  }

};

Cart.prototype.findCartItem = function (inputCartItem) {

  var value;
  var barcode = inputCartItem.item.barcode;
  for (var i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].item.barcode === barcode) {
      value = this.cartItems[i];
      break;
    }
  }
  return value;
};

Cart.prototype.getCartItems = function () {
  return this.cartItems;
};

module.exports = Cart;
