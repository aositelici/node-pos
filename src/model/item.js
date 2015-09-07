var fixtures = require('../../spec/fixtures');

function Item(barcode, name, unit, price) {

  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;

}
Item.getItem = function (barcode) {

  var value;
  var allItems = fixtures.loadAllItems();

  allItems.forEach(function (oneItem) {
    if (oneItem.barcode === barcode) {
      value = oneItem;
      return;
    }
  });

  return value;
};

module.exports = Item;