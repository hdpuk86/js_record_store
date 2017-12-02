var assert = require('assert');
var Collector = require('../collector.js');
var Record = require('../record.js')

describe("Collector Tests", function(){

  beforeEach(function(){
    collector = new Collector(100);
    record1 = new Record("Nirvana", "Lithium", "Rock", 20);
    record2 = new Record("Coldplay", "In My Place", "Pop", 2);
    record3 = new Record("Dizzee Rascal", "Flex", "Grime", 2);
    record4 = new Record("Tenacious D", "Wonderboy", "Rock", 5);
  });

  xit('should have cash', function(){
    assert.strictEqual(collector.cash, 50);
  });

  xit('should have a collection', function(){
    assert.strictEqual(collector.collection.length, 0);
  });

  xit('should buy a record', function(){
    collector.buy(record);
    assert.strictEqual(collector.collection.length, 1);
    assert.strictEqual(collector.cash, 80);
  });

  xit('should not buy a record it can\'t afford', function(){
    collector.cash = 10;
    collector.buy(record1);
    assert.strictEqual(collector.cash, 10);
    assert.strictEqual(collector.collection.length, 1);
  });

  xit('should sell a record', function(){
    collector.buy(record1);
    collector.sell(record1);
    assert.strictEqual(collector.collection.length, 0);
    assert.strictEqual(collector.cash, 100);
  });

  xit('should view the total value of the collection', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    assert.strictEqual(collector.totalValue(), 24);
  });

  xit('should view total value by genre', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    assert.strictEqual(collector.totalValue("Rock", 25));
  });

  xit('should view the most valuable record', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    assert.strictEqual(collector.mostValuable(), record1);
  });

  xit('should sort by value, ascending', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    expected = [record2, record3, record4, record1];
    assert.strictEqual(collector.sortCheapest(), expected);
  });

  xit('should sort by value, descending', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    expected = [record1, record4, record2, record3];
    assert.strictEqual(collector.sortExpensive(), expected);
  });

  xit('should compare their collection value with another collector', function(){

  });

});