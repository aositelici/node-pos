var Scanner = require('./model/scanner');
var Cart = require('./model/cart');
var Pos = require('./model/pos');

printReceipt = function (tags) {

  var scanner = new Scanner();
  var cart = new Cart();

  var pos = new Pos(cart, scanner);
  tags.forEach(function (tag) {
    pos.scan(tag);
  });

  var receipt = pos.printReceipt();

  console.log(receipt);
};

exports.printReceipt = printReceipt;

