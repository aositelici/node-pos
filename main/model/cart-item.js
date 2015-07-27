function CartItem(item,count) {
  this.item = item;
  this.count = count;
}

CartItem.prototype.getSubTotal = function() {
  return this.item.price * this.count;
}

module.exports = CartItem;
