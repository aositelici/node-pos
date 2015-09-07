'use strict';

var Receipt = require('../src/model/receipt');

describe('receipt', function() {
  describe('#getItemsString', function() {
    var cartItems = [{item: {barcode:'ITEM000000', name:'可口可乐', unit:'瓶', price:3.00},count:2},
    {item: {barcode:'ITEM000001', name:'雪碧', unit:'瓶', price:3.00},count:5}];
    var subTotals = [6,12];
    var totalAmount = 18;
    var savedAmount = 3;
    var receipt = new Receipt(cartItems,subTotals,totalAmount,savedAmount);
    it('item string should be', function() {
      var expectText = '名称：可口可乐，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
                       '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n'
      expect(receipt.getItemsString(cartItems)).toBe(expectText);
    })
  });
});