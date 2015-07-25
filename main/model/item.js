function Item(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;

}
Item.getItems = function (barcode) {
  var value;
  var fixtures = require('/home/me/Documents/nodejs/pos_v2/test/fixtures');
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