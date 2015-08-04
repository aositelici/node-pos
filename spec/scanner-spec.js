'use strict';

var Scanner = require('../src/model/scanner');
var Item = require('../src/model/item');
var CartItem = require('../src/model/cart-item');

describe('scanner',function() {

  var scanner =new Scanner();

  describe('#scan', function() {

    var tag1 = 'ITEM000001';
    it("after scan the tag without '-',the output should be", function() {

      var _item = new Item('ITEM000001', '雪碧', '瓶', 3.00); 
      var cartItem = new CartItem(_item,1); 	  
      expect(scanner.scan(tag1)).toEqual(cartItem);

    });

    var tag2 = 'ITEM000001-4';
    it("after scan the tag with '-',the output should be", function() {

      var _item = new Item('ITEM000001', '雪碧', '瓶', 3.00); 
      var cartItem = new CartItem(_item,4); 	  
      expect(scanner.scan(tag2)).toEqual(cartItem);

    });
  });
})