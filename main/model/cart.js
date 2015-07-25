
function Cart () {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function (inputCartItem) {
  var cartItem = this.findCartItem(inputCartItem);
  if(cartItem) {
    cartItem.count += inputCartItem.count;
  }
  else {
    this.cartItems.push(inputCartItem);
  }

};

Cart.prototype.findCartItem = function (inputCartItem) {
  var value;
  var barcode = inputCartItem.item.barcode;
  for(var i = 0; i < this.cartItems.length; i++) {
    if (this.cartItems[i].item.barcode === barcode) {
      value = this.cartItems[i];
      break;
    }
  }
  return value;
}

Cart.prototype.getCartItems = function () {
  return this.cartItems;
}

Cart.prototype.calculateAmount = function() {
  var amount = 0;
  var _this = this;

  _this.cartItems.forEach(function (cartitem) {
      amount += _this.getTotal(cartitem.count, cartitem.item.price);
  });

  return amount;
};

Cart.prototype.getTotal = function (count, price) {
  return count * price;
};
module.exports = Cart;
