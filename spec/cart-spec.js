'use strict';

var Cart = require('../src/model/cart');
describe('cart', function () {
  var cart;
  var inputCartItem;

  beforeEach(function () {

    cart = new Cart();
    inputCartItem = {item: {barcode: 'ITEM000000', name: '可口可乐', nuit: '瓶', price: 3.00}, count: 2};

  });

  describe('#findCartItem', function () {

    it('when cart.cartItems is null', function () {

      expect(cart.findCartItem(inputCartItem)).toEqual(undefined);
    });
    it('when cart.cartItems is not null', function () {
      cart.cartItems = [{item: {barcode: 'ITEM000000', name: '可口可乐', nuit: '瓶', price: 3.00}, count: 1}];

      expect(cart.findCartItem(inputCartItem)).toEqual({
        item: {
          barcode: 'ITEM000000',
          name: '可口可乐',
          nuit: '瓶',
          price: 3.00
        }, count: 1
      });
    });
  });

  describe('#addCartItem', function () {

    it('when cart.cartItems is null', function () {

      cart.addCartItem(inputCartItem);

      expect(cart.cartItems).toEqual([{item: {barcode: 'ITEM000000', name: '可口可乐', nuit: '瓶', price: 3.00}, count: 2}]);
    });

    it('when cart.cartItems is not null', function () {

      cart.cartItems = [{item: {barcode: 'ITEM000000', name: '可口可乐', nuit: '瓶', price: 3.00}, count: 1}];
      cart.addCartItem(inputCartItem);

      expect(cart.cartItems).toEqual([{item: {barcode: 'ITEM000000', name: '可口可乐', nuit: '瓶', price: 3.00}, count: 3}]);
    });
  });
});