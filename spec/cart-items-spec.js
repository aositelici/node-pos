'use strict';

var CartItem = require('../src/model/cart-item');

describe('cart-item', function () {

  describe('#getSubTotal', function () {

    var item = {barcode: 'ITEM000000', name: '可口可乐', nuit: '瓶', price: 3.00};
    var count = 4;
    var cartItem = new CartItem(item, count);

    it('the subtotal should be', function () {

      expect(cartItem.getSubTotal()).toBe(12);

    });
  });
});
