var assert = require('assert');
var Record = require('../record.js');
var RecordStore = require('../record_store');

describe("Store Tests", function(){

  beforeEach(function(){
    record = new Record("Biffy Clyro", "Bubbles", "Pop-Rock", 2);
    record2 = new Record("Katy Perry", "Firework", "Pop", 1);
    recordStore = new RecordStore("Change The Record", "Glasgow");
  });

  it('should have a name', function(){
    assert.strictEqual(recordStore.name, "Change The Record");
  });

  it('should have a location', function(){
    assert.strictEqual(recordStore.location, "Glasgow");
  });

  it('should have an inventory', function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it('should have a balance', function(){
    assert.strictEqual(recordStore.balance, 0);
  });

  it('should add a record', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.inventory[0], record);
    assert.strictEqual(recordStore.inventoryValue, 2);
  });

  it('should have the value of inventory', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.inventoryValue, 3);
  });

  it('should list the inventory', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    var details1 = record.properties();
    var details2 = record2.properties();
    var expected = details1 + "\n\n" + details2;
    assert.strictEqual(recordStore.listInventory(), expected);
  });

  it('should remove an item from the inventory', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    assert.strictEqual(recordStore.removeRecord(record), record);
    assert.strictEqual(recordStore.inventory.length, 1);
    assert.strictEqual(recordStore.inventoryValue, 1);
  });

  it('should sell a record', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.sell(record), record);
    assert.strictEqual(recordStore.balance, record.price);
    assert.strictEqual(recordStore.inventory.length, 0);
    assert.strictEqual(recordStore.inventoryValue, 0);
  });

  it('should not sell a record that does not exist', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.sell(record2), "Out of stock");
  });

  it('should report the financial situation', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.sell(record2);
    assert.strictEqual(recordStore.reportFinances(), "Balance: £1, Stock: £2, Total: £3");
  });

  it('should show all records of a given genre', function(){
    var record3 = new Record("White Stripes", "Icky Thump", "Rock", 2.5);
    var record4 = new Record("Linkin Park", "Numb", "Rock", 2);
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    assert.deepStrictEqual(recordStore.viewGenre("Rock"), [record3, record4]);
  });

});
