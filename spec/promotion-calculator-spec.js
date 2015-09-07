'use strict';

var PromotionCalculator = require('../src/model/promotion-calculator');

describe('promotion-calculator', function () {

  describe('.getBuyTwoGetOneFree', function () {

    it('the promotion should include', function () {

      expect(PromotionCalculator.getBuyTwoGetOneFree()).toEqual([
        'ITEM000000',
        'ITEM000001',
        'ITEM000005'
      ]);
    });
  });
  describe('#calculateSalesCount', function () {

    var inputCartItem1 = {item: {barcode: 'ITEM000001', name: '雪碧', nuit: '瓶', price: 3.00}, count: 5};
    var inputCartItem2 = {item: {barcode: 'ITEM000001', name: '雪碧', nuit: '瓶', price: 3.00}, count: 2};

    it('the free count should be', function () {
      expect(PromotionCalculator.calculateSalesCount(inputCartItem1)).toBe(1);
    });

    it('the free count should be', function () {
      expect(PromotionCalculator.calculateSalesCount(inputCartItem2)).toBe(0);
    });
  });

});
  