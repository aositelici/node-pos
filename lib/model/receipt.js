var DataShow = require('./data-show');
var CartItem = require('./cart-item');
var ReceiptItem = require('./receipt-item');

function Receipt(cartItems,subTotals,totalAmount,savedAmount) {

  var currentDate = new Date();
  var dataShow = new DataShow(currentDate);

  this.data = dataShow.formattedDateString;

  this.subTotals = subTotals;
  this.itemString = this.getItemsString(cartItems);

  this.amount = this.formatPrice(totalAmount);
  this.salesAmount = this.formatPrice(savedAmount);

}

Receipt.prototype.getItemsString = function (cartItems) {

  var itemsString = '';
  
  for(var i = 0; i < cartItems.length; i++){
    itemsString +=
      '名称：' + cartItems[i].item.name +
      '，数量：' + cartItems[i].count + cartItems[i].item.unit +
      '，单价：' + this.formatPrice(cartItems[i].item.price) +
      '(元)，小计：' +this.formatPrice(this.subTotals[i]) + '(元)\n';
  }

  return itemsString;
}

Receipt.prototype.formatPrice = function (price) {

  return price.toFixed(2);
}

Receipt.prototype.printReceipt = function () {

  return '***<没钱赚商店>收据***\n' +
    '打印时间：'
    + this.data + '\n' +
    '----------------------\n' +
    this.itemString +
    '----------------------\n' +
    '总计：' + this.amount + '(元)\n' +
    '节省：' + this.salesAmount + '(元)\n' +
    '**********************';
}

module.exports = Receipt;