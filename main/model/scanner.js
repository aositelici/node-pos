var Item = require('./item');
var CartItem = require('./cart-item');

function Scanner () {

}

Scanner.prototype.scan = function (tag) {
  var barcodeString = tag.split('-')[0];
  var count = parseFloat(tag.split('-')[1] || 1);

  var item = Item.getItems(barcodeString);

  var cartItem = new CartItem(item, count);
  return cartItem;
};

module.exports = Scanner;

