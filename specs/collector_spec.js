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

  it('should have cash', function(){
    assert.strictEqual(collector.cash, 100);
  });

  it('should have a collection', function(){
    assert.strictEqual(collector.collection.length, 0);
  });

  it('should buy a record', function(){
    collector.buy(record1);
    assert.strictEqual(collector.collection.length, 1);
    assert.strictEqual(collector.cash, 80);
  });

  it('should not buy a record it can\'t afford', function(){
    collector.cash = 10;
    collector.buy(record1);
    assert.strictEqual(collector.cash, 10);
    assert.strictEqual(collector.collection.length, 0);
  });

  it('should sell a record', function(){
    collector.buy(record1);
    collector.sell(record1);
    assert.strictEqual(collector.collection.length, 0);
    assert.strictEqual(collector.cash, 100);
  });

  it('should view the total value of the collection', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    assert.strictEqual(collector.totalValue(), 24);
  });

  it('should view total value by genre', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    assert.strictEqual(collector.totalValue("Rock"), 25);
  });

  it('should view the most valuable record', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    assert.strictEqual(collector.mostValuable(), record1);
  });

  it('should sort by value, ascending', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    expected = [record2, record3, record4, record1];
    assert.deepStrictEqual(collector.sortCheapest(), expected);
  });

  it('should sort by value, descending', function(){
    collector.buy(record1);
    collector.buy(record2);
    collector.buy(record3);
    collector.buy(record4);
    expected = [record1, record4, record3, record2];
    assert.deepStrictEqual(collector.sortExpensive(), expected);
  });

  it('should compare their collection value with another collector', function(){
    var richCollector = new Collector(500);
    var otherCollector = new Collector(20);
    richCollector.buy(record1);
    collector.buy(record2);
    otherCollector.buy(record3);
    assert.strictEqual(collector.compare(richCollector), richCollector);
    assert.strictEqual(richCollector.compare(collector), richCollector);
    assert.strictEqual(otherCollector.compare(collector), "Equal value");
  });

});
