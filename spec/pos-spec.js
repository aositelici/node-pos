'use strict'

var Pos = require('../src/model/pos');
var Cart = require('../src/model/cart');
var Scanner = require('../src/model/scanner');
describe('pos', function() {

	var pos, scanner, cart;
    beforeEach( function() {

       scanner = new Scanner();
       cart = new Cart();
       pos = new Pos(cart,scanner);

    });

    describe('#getDiscounts',function() {
       var pos, scanner, cart;
       scanner = new Scanner();
       cart = new Cart();
       pos = new Pos(cart,scanner);

      it('with promotion discounts should be', function() {
        pos.cart.cartItems = [{item: {barcode:'ITEM000001', name:'雪碧', nuit:'瓶', price:3.00},count:5}];
        pos.getDiscounts();
        expect(pos.discounts[pos.discounts.length-1]).toBe(3);

      });
      it('with promotion discounts should be', function() {
        pos.cart.cartItems = [{item: {barcode:'ITEM000003', name:'荔枝', nuit:'斤', price:15.00},count:5}];
        pos.getDiscounts();
        expect(pos.discounts[pos.discounts.length-1]).toBe(0);

      });

    });
    describe('#scan', function() {

       it("the tag without '-' in allItems to scan will lead to  be", function() {
          var tag =  'ITEM000001';
          pos.scan(tag);
          var cartItems = pos.cart.cartItems;
          expect(cartItems[cartItems.length - 1].item.barcode).toBe(tag);
          expect(cartItems[cartItems.length - 1].count).toBe(1);
        }); 

       it("the tag with '-' in allItems to scan will lead to  be", function() {
          var tag =  'ITEM000003-2';
          pos.scan(tag);
          var cartItems = pos.cart.cartItems;
          expect(cartItems[cartItems.length - 1].item.barcode).toBe('ITEM000003');
          expect(cartItems[cartItems.length - 1].count).toBe(2);
        }); 

       it("the tag do not in allItems to  will do nothing  ", function() {
          var tag =  'ITEM000008';
          pos.scan(tag);
          var cartItems = pos.cart.cartItems;
          expect(cartItems[cartItems.length - 1]).toBe(undefined);
        }); 
    });

    /*describe('#getSubtotals',function() {
      var pos, scanner, cart1;

      scanner = new Scanner();
      cart1 = new Cart();
      pos = new Pos(cart1,scanner);

      pos.cart.cartItems = [{item: {barcode:'ITEM000001', name:'雪碧', nuit:'瓶', price:3.00},count:5}];
    
      it('with promotion subtotals should be', function() {
        pos.getSubtotals();
        expect(pos.subTotals[pos.subTotals.length-1]).toBe(12);
      });
    });*/
    describe('#printReceipt',function() {
      var scanner = new Scanner();
      var cart = new Cart();
      
      var pos = new Pos(cart,scanner);
      var tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
      ];

      tags.forEach(function(tag) {
        pos.scan(tag);
      });

      it('the receipt should be', function() {

        var dateDigitToString = function(num) {
          return num < 10 ? '0' + num : num;
        };

        var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

        var expectText =
        '***<没钱赚商店>收据***\n' +
        '打印时间：' + formattedDateString + '\n' +
        '----------------------\n' +
        '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
        '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
        '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
        '----------------------\n' +
        '总计：51.00(元)\n' +
        '节省：7.50(元)\n' +
        '**********************';
        
        expect(pos.printReceipt()).toEqual(expectText);
      });
      
    });
})
