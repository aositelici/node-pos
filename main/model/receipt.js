var DataShow = require('./data-show');
var CartItem = require('./cart-item');
var ReceiptItem = require('./receipt-item');

function Receipt(cartItems,amount,promotions) {

  var currentDate = new Date();
  var dataShow = new DataShow(currentDate);

  this.data = dataShow.formattedDateString;
  this.itemString = this.getItemsString(promotions,cartItems);
  this.amount = this.formatPrice(this.getAmount(amount,promotions,cartItems));
  this.salesAmount = this.formatPrice(this.getSalesAmount(promotions,cartItems));
}

Receipt.prototype.getItemsString = function (promotions,cartItems) {

  var itemsString = '';
  var _this = this;
  
  for(var i = 0; i < cartItems.length; i++){
    var receiptItem = new ReceiptItem(promotions,cartItems[i]);
    itemsString +=
      '名称：' + cartItems[i].item.name +
      '，数量：' + cartItems[i].count + cartItems[i].item.unit +
      '，单价：' + _this.formatPrice(cartItems[i].item.price) +
      '(元)，小计：' +_this.formatPrice(receiptItem.getActualSubTotal()) + '(元)\n';
  }

  return itemsString;
}

Receipt.prototype.getAmount = function (amount,promotions,cartItems) {

  return (amount-this.getSalesAmount(promotions,cartItems));
}

Receipt.prototype.getSalesAmount = function (promotions,cartItems) {

  var saleSumAmount = 0;

  for (var i = 0; i < cartItems.length; i++){

    var receiptItem = new ReceiptItem(promotions,cartItems[i]);
    saleSumAmount += receiptItem.discount;
  }
  return saleSumAmount;
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