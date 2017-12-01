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

  it('can add a record', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.inventory[0], record);
  });

  it('can list the inventory', function(){
    recordStore.addRecord(record);
    recordStore.addRecord(record2);
    var details1 = record.properties();
    var details2 = record2.properties();
    var expected = details1 + "\n\n" + details2;
    assert.strictEqual(recordStore.listInventory(), expected);
  });

  it('can remove an item from the inventory', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.removeRecord(record), record);
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it('can sell a record', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.sell(record), record);
    assert.strictEqual(recordStore.balance, record.price);
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it('should return "Out of stock" if it tries to sell a record that does not exist', function(){
    recordStore.addRecord(record);
    assert.strictEqual(recordStore.sell(record2), "Out of stock");
  });

});
